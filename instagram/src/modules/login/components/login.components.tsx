import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../../card/components/card.component'
import Input from '../../input/components/input.component'
import Button from '../../button/components/button.component'
import Container from '../../container/components/container.component'

const Login = () => {

    const linkStyle = {
      textAlign:'center',
      width:'100%',
      marginLeft:'15px'
    } as React.CSSProperties

    return(
      <div>
      <Container>
        <Card/>
        <Input placeholder='Email' label="Email"></Input>
        <Input placeholder='Password' label="Passw"></Input>
        <Button block={false}></Button>
        <Link style={linkStyle} to={"/registry"}>Registry</Link>
      </Container>   
    </div>  
    )
}

export default Login;