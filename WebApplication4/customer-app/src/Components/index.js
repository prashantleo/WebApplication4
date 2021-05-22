import React from 'react'
import Customerform from './Customerform'

import{useForm} from "./hooks/useForm"

    
const getFreshModelObject=()=>({
    customerId:0,
    customerName: '',
    customerAddress: '',


})

export default function Customer(){
    
const {      values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls}=useForm(getFreshModelObject)
    return(
        <div>

          <Customerform
         {...{ values,
            setValues,
            errors,
            setErrors,
            handleInputChange,
            resetFormControls}}         />

        </div>
    )
}

