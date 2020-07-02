import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../../input/components/input.component'
import Button from '../../button/components/button.component'
import Container from '../../container/components/container.component'

const Registry = () => {

    const linkStyle = {
      textAlign:'center',
      width:'100%',
      marginLeft:'15px'
    } as React.CSSProperties

    
    const styleh2 = {
        color:'#555',
 
     }

    return(
      <Container>  
        <h2 style={styleh2}>Registry</h2>
        <Input placeholder='Email' label="Email"></Input>
        <Input placeholder='Password' label="Passw"></Input>
        <Button block={false}></Button>
        <Link style={linkStyle} to={"/"}>Login in</Link>
    </Container>  
    )
}

export default Registry;