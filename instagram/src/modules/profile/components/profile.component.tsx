import React from 'react'
import NavBar from '../../navbar/components/navbar.component'
import ImgExample from '../../img/cygnusx1.jpeg'
import Button from '../../button/components/button.component'

const style = {
    container:{
        display:'flex',
        justifyContent:'space-between',
        padding:'10px',
    },
    img:{
        padding:'15px',
        borderRadius:'100%'
    }
}

const Profile = () => {
    return(
        <div>
            <NavBar></NavBar>
            <div style={style.container}>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <Button></Button>
            </div>
        </div>
    )
}

export default Profile;