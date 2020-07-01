import React from 'react';
import Title from './title.component'

const Card = (props:any) => {

    const style = {
        backgroundColor:'#fff',
        padding:'10px 15px',
        border:'1px solid #ddd'
    }
    return(
        <div style={style}>
            <Title/>
        </div>
    )
}

export default Card;