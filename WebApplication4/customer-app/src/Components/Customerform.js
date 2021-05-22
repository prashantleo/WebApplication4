import React from 'react'
import Form from '../Components/Layouts/Form'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { Grid, InputAdornment, ButtonGroup, Button as MuiButton } from '@material-ui/core';
import Input from "./Controls/input"
import {useState} from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../api";



 
    

export default function Customerform(props) {
    const { values, setValues, errors, setErrors,
        handleInputChange, resetFormControls } = props;
const [open, setOpen] = React.useState(false)
const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
 const increment=()=>{
   let customerinc=values.customerId+10
   console.log(customerinc)
 }
  
    
   
     
     const validateForm=()=>{
         let temp={};
         temp.customerName=values.customerName!==""?"":"The field is required";
         
         const submitCustomer = e =>{
         temp.customerAddress=values.customerAddress!==""?"":"The field is required";
         setErrors({...temp})
         return Object.values(temp).every(x=>x==="")
     }

          e.preventDefault();
          if(validateForm()){
            if (values.customerId == 0) {
              createAPIEndpoint(ENDPIONTS.CUSTOMER).create(values)
              .then(res=>{
                console.log(res)
              })
              .catch(err => console.log(err));
            }    
                
          else{ 
              createAPIEndpoint(ENDPIONTS.CUSTOMER).update(values.customerId,values)
              .then(res => {
                resetFormControls();
              })
              .catch(err => console.log(err));
          }
      }
    }
  
          
    
    return (
        <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
        <Form onSubmit={submitCustomer} >
               
                    <Input
                    label="Customer Name"
                    name="customerName"
                    value={values.customerName}
                    onChange={handleInputChange}
                    error={errors.customerName}/>

                    <Input
                    label="Customer Address"
                    name="customerAddress"
                    value={values.customerAddress}
                    onChange={handleInputChange}
                    error={errors.customerAddress}/>
                     <ButtonGroup>
                            <MuiButton
                                size="large"
                            
                                type="submit">Submit</MuiButton>
                    
                            <MuiButton
                                size="small"
                            
                            />
                        </ButtonGroup>
                   


               
               </Form>


        </DialogContent>
        
      </Dialog>
    </div> 
    )
}
