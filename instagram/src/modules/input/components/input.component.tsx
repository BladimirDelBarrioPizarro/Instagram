import React from 'react';

interface IInput{
    placeholder?:string,
    label:string
}

const Input = (props:IInput) => {

    const styleInput = {
        backgroundColor:'#fff',
        padding:'10px 15px',
        border:'1px solid #ddd',
        borderRadius:'4px',
        width:'calc(100% - 30px)',
        marginBotton:'10px',
        marginTop:'2px'
    }

    const styleSpan = {
        fontSize: '10px',
        color:'#777',
        textTransform:'uppercase',
        fontWeight:900
    } as React.CSSProperties


    const {label} = props

    return(
        <div>
             <span style={styleSpan}>{label}</span>
             <input type="email" {...props} style={styleInput}></input>
        </div>
      
    )
}

export default Input;