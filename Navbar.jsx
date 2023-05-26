import React from 'react';
import { AppBar,Button,Toolbar,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color= {"white"} >VJCET</Typography>
                <Button color='secondary' align='centre' ><Link to={'/Table1'}>student</Link></Button>
                <Button color='error' align='right'><Link to={'/Add1'}>Add</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar