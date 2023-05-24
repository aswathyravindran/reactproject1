import React from 'react'
import { Button, Typography } from '@mui/material';
const First = () => {
  return (
    <div>
        <h1> Aswathy Ravindran</h1>
        <input placeholder='Name'/>
        <br/>
        <br/>
        <input type='password' placeholder='password'/>
        <br/>
        <button>Submit</button>   

        <br/>

        <Typography variant='h1'>Aswathy Ravindran</Typography>
        <br/>

        <Typography variant='outlined' label='Name' /> 
        <br/>
       <Button variant='contained'>Submit</Button>
        <br></br>

   </div>
  )
}

export default First