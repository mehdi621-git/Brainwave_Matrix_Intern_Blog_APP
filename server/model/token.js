import mongoose from "mongoose";

const SchemaToken  = mongoose.Schema({
    token : {
        type : String,
        require : true,
        unique : true,
    }
})
const token = mongoose.model('token',SchemaToken)
export default token;