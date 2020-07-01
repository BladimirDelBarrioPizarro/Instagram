import React from 'react'


interface IButtonProps {
   
}

const Button = (props:IButtonProps) => {
    
    
    const buttonStyle = {
        backgroundColor:'#1FE9B8',
        border:'0px',
        borderRadius:'4px',
        padding:'10px 15px',
        marginTop:'4px',
        color:'#fff'
    }

    return(
        <button style={buttonStyle}>Enviar</button>
    )
}

export default Button;