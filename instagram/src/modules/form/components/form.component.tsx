import React from 'react'
import { reduxForm, Field } from 'redux-form';
import CustomInput from './customInput.comoonent';

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
   
    return(
        <div>
            <form onSubmit={handleSubmit(()=>{})}>
                <Field name="name" component={CustomInput} placeholder="Name" title="Nombre"></Field>
                <Field name="lastname" component={CustomInput} placeholder="Lastname" title="Apellido"></Field>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    )
}

export default reduxForm({
    form:'user',
    validate
})(Form)