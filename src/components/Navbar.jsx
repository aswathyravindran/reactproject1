import React from 'react'
import { AppBar, Toolbar, Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ flexGrow: 1 }} variant="h6" align='left'>NewApp</Typography>
                <Button variant='text' ><Link to={'/'} style={{textDecoration:'none',color:'black'}} >Home</Link></Button>
                <Button variant='text' ><Link to={'/first' }style={{textDecoration:'none',color:'black' }}>First</Link></Button>
                <Button variant='text' ><Link to={'/table'} style={{textDecoration:'none',color:'black' }}>Table</Link></Button>
                <Button variant='text' ><Link to={'/axios'} style={{textDecoration:'none',color:'black' }}>ApiGet</Link></Button>
            </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navbar