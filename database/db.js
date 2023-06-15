import mongoose from 'mongoose'

    const Connection=async (URL)=>{
    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log("database connected successfully to server ..");
    } catch (error) {
        console.log("error while connecting database");
    }
}

export default Connection;