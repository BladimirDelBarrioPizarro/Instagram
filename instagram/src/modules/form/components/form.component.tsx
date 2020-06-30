import React from 'react'
import { reduxForm, Field } from 'redux-form';

interface UserParams {
    name:string,
    lastname:string
}

const validate = (values:UserParams) => {
    const error = {name:'',lastname:''}
    if(!values.name){
        error.name = 'required'
    }
    if(!values.lastname){
        error.lastname = 'required'
    }
    return error;
  }


const Form = (props:any) => { 
  const {handleSubmit} = props
  console.log(props)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="name" component="input"></Field>
                <Field name="lastname" component="input"></Field>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    )
}

export default reduxForm({
    form:'user',
    validate
})(Form)