import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../../card/components/card.component'
import Input from '../../input/components/input.component'
import Button from '../../button/components/button.component'

const Login = () => {
    return(
      <div>  
        <Card/>
        <Input placeholder='Email' label="Email"></Input>
        <Input placeholder='Password' label="Passw"></Input>
        <Button></Button>
        <Link to={"/registry"}>Registry</Link>
    </div>  
    )
}

export default Login;