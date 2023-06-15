import React from 'react'

import { useState,useEffect } from 'react';

import { Grid, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

import { useSearchParams ,Link} from 'react-router-dom';

import Singlepost from './Singlepost';

import { API } from '../../../service/api';

function Post() {

    const [posts, getPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

useEffect(()=>{

    const fetchData=async()=>{
          let response=await API.getAllPosts({category:category||''});
          if(response.isSuccess)
          {
            getPosts(response.data);
          }
        //   console.log(posts);
        //   console.log(posts.length);
    }
    fetchData();

},[category]);



  return (
    <>
    {
        posts?.length>0 ? posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
               
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                <Singlepost post={post} />
                          
                        </Link>
            </Grid>
        )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                No data is available for selected category
            </Box>
    }
</>
  )
}

export default Post;
