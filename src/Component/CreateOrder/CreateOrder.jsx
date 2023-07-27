 
import { MenuItem, Select, TextField, InputLabel, Button } from '@mui/material';
import React,{useState,useEffect} from "react";

const CreateOrder=()=>{

const[orderDetails,setOrderDetails]=useState('');
const[orderCost,setorderCost]=useState(0);

    function submitHandler()
    {
        fetch('http://127.0.0.1:3000/create?' + new URLSearchParams({
       details:orderDetails,
       cost:orderCost

    }))

    }

    

    useEffect(()=>{
        console.log(orderDetails);
        console.log(orderCost);

    },[orderDetails,orderCost]);
    return(
        <>
        <br /><br /><br /><br /><br />
           <TextField
                id="outlined-number"
                label="Order Details"
                type="text"
                role=""
                data-testid="orderdetails-input"
                onChange={(e)=>setOrderDetails(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
               <TextField
                id="outlined-number"
                label="Order Cost"
                type="number"
                role=""
                data-testid="ordercost-input"
                onChange={(e)=>setorderCost(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
<br />
<Button size="small" onClick={submitHandler}>Submit</Button>
            
        </>
    );

}

export default CreateOrder