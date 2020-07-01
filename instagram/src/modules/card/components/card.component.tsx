import React from 'react';

const Card = (props:any) => {

    const {children} = props

    const style = {
        backgroundColor:'#fff',
        padding:'10px 15px',
        border:'1px solid #ddd'
    }
    return(
        <div style={style}>
             {children}   
        </div>
    )
}

export default Card;