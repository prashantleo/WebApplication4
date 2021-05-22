import React,{useEffect,useState} from 'react'
import {createAPIEndpoint,ENDPIONTS} from "../api/index"
import Table from './Table'
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';


function Customerlist(props) {
    const [Customerlist, setCustomerlist] = useState([]);
    const { setCustomerId,setCustomerListVisibility, resetFormControls, setNotify } = props;
    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.CUSTOMER).fetchAll()
        .then(res=>{
            setCustomerlist(res.data)
        })
        .catch(err=>console.log(err))
     }, [])
     const showForUpdate = id => {
        setCustomerId(id);
        setCustomerListVisibility(false)

    }
    const deleteCustomer = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            createAPIEndpoint(ENDPIONTS.CUSTOMER).delete(id)
                .then(res => {
                    setCustomerListVisibility(false);
                    setCustomerId(0);
                    resetFormControls();
                   
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
                        <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>CustomerId</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Address</TableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                    {
                    Customerlist.map(item => (
                    
                            <TableRow key={item.customerId}>
                                <TableCell
                                    onClick={e => showForUpdate(item.customerId)}>
                                    {item.customerId}
                                </TableCell>
                                <TableCell
                                    onClick={e => showForUpdate(item.customerName)}>
                                    {item.customerName}
                                </TableCell>
                                <TableCell
                                    onClick={e => showForUpdate(item.customerAddress)}>
                                    {item.customerAddress}
                                </TableCell>
                                
                                <TableCell>
                                    <DeleteOutlineTwoToneIcon
                                        color="secondary"
                                        onClick={e => deleteCustomer(item.customerId)} />
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            
        </div>
    )
}

export default Customerlist
