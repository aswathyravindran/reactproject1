import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
     var [pname,setPname] = useState(" ");
     var [val,setVal]=useState()

    const inputHandler = (e)=>{
       setVal((val)=e.target.value);
       console.log(val);
      
      
    }
    const ChangeName=()=>{
      setPname(val);
    }
  return (
    <div>
        <Typography variant='h4' align= 'center' > Hello {pname} </Typography>
        <TextField variant='outlined' label='Name'onChange={inputHandler}/>
        <br/>
        <br/>
        <Button variant='contained' align= 'justify' onClick={ChangeName} > Change</Button>
    </div>
  )
}

export default StateBasics