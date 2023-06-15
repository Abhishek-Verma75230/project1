
import post from "../model/post.js";


export const createPost=async (request,response)=>{
    try {
           const Post=await new post(request.body);
           Post.save();
           return response.status(200).json('post saved successfully');
    } catch (error) {
        return response.status(500).json(error);
    }

}



export const getAllPosts = async (request, response) => {
    // let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        // if(username) 
        //     posts = await post.find({ username: username });
         if (category) 
            posts = await post.find({ categories: category });
        else 
            posts = await post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getpost=async (request,response)=>{
    try {
        const postdata= await post.findById(request.params.id);
        return response.status(200).json(postdata);
    } catch (error) {
        return response.status(500).json({msg:error.message});
    }
}


export const updatePost=async(request,response)=>{
    try {
        const postdata=await post.findById(request.params.id);
        if(!postdata)
        {
            return response.status(404).json({msg:'post not found '});
        }
        await post.findByIdAndUpdate(request.params.id,{$set:request.body});
        return response.status(200).json({msg:'post updated successfully'});
    } catch (error) {
        return response.status(500).json({msg:'error while updating the post'});
    }
}


export const deletePost=async(request,response)=>{
    try {
        const postdata=await post.findById(request.params.id);
        if(!postdata)
        {
           return response.status(404).json({msg:'post not found'});
        }
        console.log("delete ");
        
        // await post.findByIdAndDelete(post._id);
        await post.findByIdAndDelete(request.params.id);

        return response.status(200).json({msg:'post deleted successfully '})
    } catch (error) {
        return response.status(500).json({msg:'something went wrong on deletion'});
    }
}
