import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp,faRetweet} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    
    const styleFooter = {
        footer:{
            //display:'flex',
            backgroundColor:'#eee',
            marginLeft:'-15px',
            marginBottom:'-10px',
            width:'calc(100% + 30px)'
        },
        button:{
            textAlign:'center',
            //width:'calc(100% + 30px)',
            cursor:'pointer',
            flex:1,
            padding:'10px 15px',
        }
    } 

    return (
        <div style={styleFooter.footer as React.CSSProperties}>
        
    
    
    <div style={styleFooter.button as React.CSSProperties}>
        <FontAwesomeIcon icon={faThumbsUp} />Like 
    </div>

    <div style={styleFooter.button as React.CSSProperties}>
        <FontAwesomeIcon icon={faRetweet}/>Compartir 
    </div>

    </div>
    );
}

export default Footer;