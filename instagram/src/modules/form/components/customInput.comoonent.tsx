import React from 'react'

const CustomInput = (props:any) => {
    console.log(props)
    const {input, meta, title} = props
    return(
        <div>
            {title ? <span>{title}</span> : ''}
            <input {...input} />
            {meta.error  && !meta.valid ?
                <span>{meta.error}</span>
            :''}
            
        </div>
    )
}

export default CustomInput;