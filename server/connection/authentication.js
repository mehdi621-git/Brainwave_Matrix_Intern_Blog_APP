import { config } from "dotenv";
config();
import axios from 'axios'
import { OAuth2Client } from "google-auth-library";
import user from "../model/AuthModel.js";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import token from "../model/token.js";
import jwt from 'jsonwebtoken'
dotenv.config()

// const clientId = "887444660757-f9hv1h1qtaoop3cs050ij7ifus254j2m.apps.googleusercontent.com";
// if (!clientId) {
//   throw new Error('Missing CLIENT_ID environment variable');
// }
// const client = new OAuth2Client(clientId);

export const SavingAndVerifyingGAuth = async (req, res) => {
  const { data : access_token } = req.body;

  try {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${access_token}`);
    // const ticket = await client.verifyIdToken({
    //   idToken: access_token,
    //   audience: clientId,
    // });
    const payload = response.data;
    const { sub: googleId, email, name, picture } = payload;
   console.log(payload)
    let newUser = await user.findOne({ email });
    if (!newUser) {
      newUser = new user({
        googleId,
        email,
        name,
        writerPic : picture,
      });
      await newUser.save();
      return res.status(200).json({ message: "Sign up successful", user: newUser });
    }
      return res.status(409).json({message : "User Already Exists Login"})
    

   
  } catch (error) {
    console.error('Error while saving and authenticating user:', error.message || error);
    return res.status(500).json({ message: "Failed while saving and authenticating user", error: error.message });
  }
};
const encryptPass =async (password)=>{
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password,salt)
}
export const SavingAndVerifyingM = async (req, res) => {
  const { data } = req.body;
  console.log(data)
  const { email, password, firstname, lastname ,writerPic } = data;
console.log(email)
  try {
    let mUser = await user.findOne({  email });
    if (!mUser) {
      const hashPass = await encryptPass(password);
      mUser = new user({
        email,
        password: hashPass,
        name: `${firstname} ${lastname}`,
        writerPic, // Added space between first name and last name
      });
      await mUser.save();
      return res.status(200).json({ message: "Sign Up Successful M" });
    }
   return res.status(409).json({message : "User Already exist"})
  } catch (error) {
    return res.status(500).json({ message: "Error while saving user at backend", error: error.message });
  }
};

export const verifyingG =async (req,res)=>{
      const {data:access_token} =req.body
  try {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${access_token}`);
    const payload = response.data;
    const { sub: googleId, email, name, picture } = payload;

    let newUser = await user.findOne({ email });
    if(!newUser){
      return res.status(404).json({message:"user not found"})
    }
    const accessToken = jwt.sign(newUser.toJSON(),process.env.ACCESS_TOKEN,{expiresIn : '15m'})
    const refreshToken =jwt.sign(newUser.toJSON(),process.env.REFRESH_TOKEN)
    const newToken = new token({token : refreshToken})
    newToken.save();
    return res.status(200).json({message:"user Authenticated",newUser,accesstoken:accessToken,refreshtoken:refreshToken})
  } catch (error) {
      return res.status(500).json({message:"error while verifying userG",error:error.message,})
  }
}
const matchPass =async (entered , stored)=>{
     return await bcrypt.compare(entered,stored)
}
export const verifyingM =async(req,res)=>{
  const { data } = req.body;
  console.log(req.body.data)
  const { email , password } = data;
  
  try {
    
    const VuserM = await user.findOne({ email : data.email});
    console.log(VuserM);
  
    if (!VuserM) {
      return res.status(404).json({ message: 'User Not Exist' });
    }
    const {name , email , writerPic , _id} =VuserM
  
    const match = await matchPass(password, VuserM.password);
    console.log(match)
    if (!match) {
      console.log(match);
      return res.status(401).json({ message: 'Wrong Password' });
    }
  
    const accessToken = jwt.sign(VuserM.toJSON(), process.env.ACCESS_TOKEN, { expiresIn: '15m' });
    const refreshToken = jwt.sign(VuserM.toJSON(), process.env.REFRESH_TOKEN);
  
    const newToken = new token({ token: refreshToken });
    await newToken.save();
  
    return res.status(200).json({ message: 'Login Successful', user: {name , email,writerPic,_id}, accesstoken: accessToken, refreshtoken: refreshToken });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}  