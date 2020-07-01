import React from 'react';

const Container = (props:any) => {

    const {children} = props

    const style = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#eee',
        padding:'10px 15px',
        height:'calc(100vh - 20px)',
        width:'calc(100vw - 30px)'
    } as React.CSSProperties
    return(
        <div style={style}>
             {children}   
        </div>
    )
}

export default Container;