import userModel from "../Models/userModels.js";

export const newUser=async(req,res)=>{
    try {
        const {fastName,lastName,email,address,phone}=req.body;
        const user = userModel({fastName,lastName,email,address,phone});
        await user.save();

        if(!user){
            res.status(401).json({message:"user not created"})
        }

        res.status(200).json({message:"user created successfully",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
        
    }
}

export const getUser = async(req,res)=>{
    try {
        const user = await userModel.find();
        if(!user){
            res.status(401).json({message:"user not created"})
        }

        res.status(200).json({message:"user data show",user})
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
    }
}

export const updateUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const updateUser= await userModel.findByIdAndUpdate(userId,req.body,{
            new:true
        })
        if(!updateUser){
            res.status(404).json({message:"user not found"})
        }

        res.status(200).json({message:"user updated successfully",updateUser})
    } catch (error) {
        res.status(500).json({message:"Internal server error"},error)
    }
}

export const deleteUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const deleteUser= await userModel.findByIdAndDelete(userId)
        if(!deleteUser){
            res.status(404).json({message:"user not found"})
        }

        res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"},error)
    }
}