import User from '../model/userSchema.js';


export const userSignUp = async (req, res)=>{
    try{
        const exist = await User.findOne({ username: req.body.username });
        if(exist) {
            return res.status(401).json({ message: 'User already exist'});
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json(`${user.firstname} has been successfully registered`);
    }catch(err){
        console.log("Error : " , err);
    }
}

export const userLogin = async (req, res)=>{
    try{
        const user = await User.findOne({ username: req.body.username , password : req.body.password });
        if(user) {
            return res.status(200).json(`${user.firstname} has been successfully loged in`);
        }else{
            return res.status(401).json(`username or password is wrong`);
        }
        
    }catch(err){
        console.log("Error : " , err);
    }
}