import React from 'react'
import NavBar from '../../navbar/components/navbar.component'
import ImgExample from '../../img/cygnusx1.jpeg'
import Button from '../../button/components/button.component'


const style = {
    container:{
        padding:'15px'
    },
    row:{
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'10px'
    },
    img:{
        padding:'15px',
        borderRadius:'100%'
    }
}

const Profile = () => {
    return(
        <div style={style.container}>
            <NavBar></NavBar>
            <div style={style.row}>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <Button></Button>
            </div>
            <div style={style.row}>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <img src={ImgExample} alt='image' style={style.img}></img>
            </div>

            <div style={style.row}>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <img src={ImgExample} alt='image' style={style.img}></img>
                <img src={ImgExample} alt='image' style={style.img}></img>
            </div>
            
        </div>
    )
}

export default Profile;