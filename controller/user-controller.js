
import User from "../model/User.js";

import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

import token from "../model/token.js";

dotenv.config();

export const signupuser= async (request,response)=>{
     try {
      //   const user=request.body;
       
      const {name,username,password}=request.body;
      //   console.log(password); 
      //   const newUser=new User(user);
     
       

        
      if(!username||!name||!password)
      {
         return response.status(400).json({msg:'please fill all details'});
      }
       
      const existingUser= await User.findOne({username});

      if(existingUser)
      {
         return response.status(400).json({msg:'username already exist please fill another username'});
      }

       const hashPassword=await bcrypt.hash(password,10);
      //    password=hashPassword;
         const newUser=new User({name,username,password:hashPassword});
         await newUser.save();

        return response.status(200).json({msg:'signup successfull'});
     } catch (error) {
        return response.status(500).json({msg:'error when signup the user',error});
     }
}





export const loginuser=async(request,response)=>{
   let user=await User.findOne({username:request.body.username});
      if(!user)
      {
         return response.status(400).json({msg:'username does not exist'});
        
      }
   try {
      
      let match =await bcrypt.compare(request.body.password,user.password);
         if(match)
         {
            const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRETKEY,{expiresIn:'15m'});

               const refreshToken=jwt.sign(user.toJSON(),process.env.RANDOM_SECRETKEY);

               const newToken=new token({token:refreshToken});
               await newToken.save();

               return response.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username});

         }
         else
         {
            return response.status(400).json({msg:'password does not match'});
         }
   } catch (error) {
      return response.status(500).json({msg:'invalid credentials'});
   }

}































