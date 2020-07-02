import React from 'react';


interface IContainer{
   // center?:boolean,
    children:any
}

const Container = (props:IContainer) => {

    const {children} = props

    const style = {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
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