import { Typography,Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateEg1 = () => {
    var [hname,setHname] = useState(" ");

    const changeHname = ()=>{
      setHname("Welcome Home")
    }
    const changeGname = ()=>{
      setHname("Gallery Page")
    }
    const changeCname = ()=>{
        setHname("Contacts Page")
    }

  return (
    <div>
       <Button variant='contained' color='primary'onClick={changeHname}>Home</Button>&nbsp;
        <Button variant='contained' color='secondary'onClick= {changeGname} >Gallery</Button>&nbsp;
        <Button variant='contained' color= 'success'onClick={changeCname} >Contact</Button>&nbsp;
        <br/>
        <br/>
        <Typography variant='h6'>Welcome to {hname}</Typography>
    </div>
  )
}

export default StateEg1