import React from 'react'


interface IButtonProps {
   block?:boolean
}

const Button = (props:IButtonProps) => {
    
    
    const buttonStyle = (block:boolean) => ({
        backgroundColor:'#1FE9B8',
        border:'0px',
        borderRadius:'4px',
        padding:'10px 15px',
        marginTop:'4px',
        marginBottom:'10px',
        color:'#fff',
        width:block?'100%' :undefined
    })

    const {block = false} = props

    return(
        <button style={buttonStyle(block)}>Enviar</button>
    )
}

export default Button;