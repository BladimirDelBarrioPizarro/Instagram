import React from 'react'
import Post from './post.component'
import imgExample from '../../img/cygnusx1.jpeg'
import NavBar from '../../navbar/components/navbar.component'


const NewsFeed = () => {
   
    const style = {
        margin:'0 auto'
    }

    return(
        <div style={style}>
            <NavBar></NavBar>
            <Post image={imgExample}></Post>
            <Post image={imgExample}></Post>
            <Post image={imgExample}></Post>
        </div>
            
    
    );
}

export default NewsFeed;