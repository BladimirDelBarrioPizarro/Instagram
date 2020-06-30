import React from 'react'
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

const Form = (props:any) => {

    
  const {handleSubmit} = props

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
    form:'user'
})(Form)