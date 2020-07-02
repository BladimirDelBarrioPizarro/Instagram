import React from 'react'
import imgExample from '../../img/cygnusx1.jpeg'


const Post = () => {

     const stylePost = {
        backgroundColor:'#fff',
        padding:'10px 15px',
        border:'1px solid #ddd'
    } 

    return(
        <div style={stylePost}>
            <img alt='img' src={imgExample}></img>
        </div>        
    )
}

export default Post;
