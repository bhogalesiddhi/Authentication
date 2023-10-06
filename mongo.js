const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

mongoose.connect("mongodb://127.0.0.1:27017/self_testing").then(()=> {
    console.log("Mongodb connected")
})
.catch((e)=>{
    console.log(e)
})

const userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        require : true,
    },
    contactno : {
        type: Number,
    },
    location:{
        type:String,
    },
    skills:{
        type:String,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true})

userSchema.methods.generateAuthToken = async function (){
    try{
      let token = jwt.sign({_id: this._id},process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token : token });
      await this.save();
      return token;
    }catch(error){
      console.log(error)
    }
}


const userCollection = mongoose.model("DummyUser",userSchema)

module.exports = userCollection;