const jwt = require("jsonwebtoken");
const userCollection = require("./mongo")

const authenticate = async (req,res,next) => {
   try{
    // const token = localStorage.getItem(jwtoken)
    const token = req.cookies.token
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY)
   
    const rootUser = await userCollection.findOne({_id: verifyToken._id,"tokens.token":token});

    if(!rootUser) { throw new Error("User not found")}

    req.token = token;
    req.rootUser= rootUser;
    req.userID = rootUser._id;
    console.log(rootUser)
   

    next();
   }catch(err){
    res.status(401).send("Unauthorized : No token provided")
    console.log(err)
   }
}

module.exports = authenticate; 