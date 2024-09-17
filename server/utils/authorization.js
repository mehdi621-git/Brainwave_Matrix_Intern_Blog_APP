import { config } from "dotenv";
config();
import jwt from 'jsonwebtoken';

export const authorization = (req, res, next) => {
  console.log("headers are", req.headers);

  const auth = req.headers['authorization'];
  const token = auth && auth.split(' ')[2]; // Correct token extraction
  console.log("token", token);

  if (token == null) {
    return res.status(401).json({ msg: "AccessToken Missing" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => { // Use ACCESS_TOKEN for verification
    if (error) {
        console.log(error.message)
      return res.status(403).json({ msg: 'Invalid Token' });
    }
    req.user = user;
    next();
  });
};
