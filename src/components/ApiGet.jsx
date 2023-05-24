import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[users,setUsers]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
            console.log(response)
        }
        )
        .catch(err=>console.log(err))
    },[])
   
  return (
    <div style={{paddingTop:'65px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        </TableRow>
                        </TableHead>        
                        <TableBody>
                            {users.map((value,index)=>{
                                return(
                                    <TableRow key={index}> 
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell>{value.username}</TableCell>
                                        <TableCell>{value.email}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                 
             
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet