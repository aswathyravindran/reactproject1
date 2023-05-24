import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Button12 = () => {
    var [hname,setHname] = useState(" ");

    const changeHname = ()=>{
      setHname("Welcome Home")
    }
    const changeGname = ()=>{
      setHname("Gallery Page")
    }

  return (
    <div>
        <Button variant='contained' color='primary'onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained' color='secondary'onClick= {changeGname} >Gallery</Button>&nbsp;
        <Button variant='contained' color= 'success' >Contact</Button>&nbsp;
        <br/>
        <Typography variant='h4'>Welcome to{hname}</Typography>
    </div>
  )
}

export default Button12