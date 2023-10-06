const userCollection = require("./mongo")

exports.getProfile = async (req,res) => {
    console.log(re)
    res.send(req.rootUser)
}

exports.getAllUser = async (req,res) => {
    try {
        const users = await userCollection.find();
        res.status(200).json(users);
        
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      
}

exports.getUser =  async(req,res) => {
    try{
        const user = await userCollection.findById(req.params.id)
        if(!user){
            res.status(404).json("User doesnt exists")
        }else{
            res.status(200).json(user)
        }

    }catch(err){
        console.log(err)
    }
}

exports.registerUser = async (req,res) => {
   try{
    const existingUser =  await userCollection.find({email:req.body.email})
    
    if(existingUser.length > 0){
        res.status(200).json("exists")
    }

    else{
            const newUser = await new userCollection({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            contactno : req.body.contactno,
            location : req.body.location,
            skills: req.body.skills
         });
     
         const user = await newUser.save();
         res.status(200).json(user)
        
    }
   }catch(error){
    console.log(error)
   }
}

// 
exports.loginUser = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      const user = await userCollection.findOne({ email: email });
      if (user) {
        if (password === user.password) {
          const token = await user.generateAuthToken();
          const message = "Login successfull"
          const responseObj = {
            message : message,
            token : token,
            user : user
          }
          console.log(token);
  
          // Store the JWT token in local storage
          // localStorage.setItem('jwtToken', JSON.stringify(token));
  
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 258920000000),
            httpOnly: true
          });
          res.status(200).json(responseObj);
        } else {
          res.status(200).json("Password incorrect");
        }
      } else {
        res.status(200).json("User does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

exports.updateUser = async (req,res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await userCollection.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            });
            res.status(200).json("Account updated successfully");
        }
        catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    }
    else{
        res.status(403).json("You can update only your account")
    }
}

exports.getUsername = async (req,res) => {

  const username = JSON.stringify(req.query.username);
  const user = userCollection.findOne({username:username})
  res.status(200).json(user)


}

