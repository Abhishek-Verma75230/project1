import React from 'react'

import { Grid } from '@mui/material'

import Categories from './Categories'

// import Banner from '../banner/banner'

import Banner from '../../banner/Banner'

import Post from './post/Post'

function Home() {
  return (
    <div>
             <Banner/>
             <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                  <Post/>
                </Grid>
            </Grid>
    </div>


  )
}

export default Home
