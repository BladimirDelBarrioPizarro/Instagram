import React from 'react'
import Footer from './footer.component'

interface IPostProps{
    image:string
}


const Post = (props:IPostProps) => {

     const {image} = props; 
    
     const style = {
         display:'block',
         margin:'auto',
         marginTop:'5px'
     }
     

    return(
       <div>
           <img style={style} alt='img' src={image}></img>
           <Footer></Footer>
       </div>
    )
}

export default Post;
