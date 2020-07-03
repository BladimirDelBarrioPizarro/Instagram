import React from 'react'
import Post from './post.component'
import imgExample from '../../img/cygnusx1.jpeg'


const NewsFeed = () => {
   
    const style = {
        margin:'0 auto'
    }

    return(
        <div style={style}>
            <Post image={imgExample}></Post>
            <Post image={imgExample}></Post>
            <Post image={imgExample}></Post>
        </div>
            
    
    );
}

export default NewsFeed;