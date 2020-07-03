import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faNewspaper} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const style = {
        borderBottom:'solid 1px #aaa',
        padding:'10px 15px'
    }

    const styleIcon = {
        float:'right'
    }

    const styleLink = {
        color:'#555',
        textDecoration:'none'
    }

    return(
        <div style={style}>
            <Link style={styleLink} to='/newsfeed'>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>   News Feed
            </Link>
            <div style={styleIcon as React.CSSProperties}>
            <Link style={styleLink} to='/profile'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>  Profile
            </Link>
            </div>  
        </div>
    )
}

export default NavBar;