import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../../card/components/card.component'
import Input from '../../input/components/input.component'
import Button from '../../button/components/button.component'

const Registry = () => {

    const linkStyle = {
      textAlign:'center',
      width:'100%',
      marginLeft:'90px'
    } as React.CSSProperties

    
    const styleh2 = {
        color:'#555',
 
     }

    return(
      <div>  
        <h2 style={styleh2}>Registry</h2>
        <Input placeholder='Email' label="Email"></Input>
        <Input placeholder='Password' label="Passw"></Input>
        <Button block={true}></Button>
        <Link style={linkStyle} to={"/registry"}>Login in</Link>
    </div>  
    )
}

export default Registry;