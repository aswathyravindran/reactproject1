import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Add1 from './Add1';
// import { red } from '@mui/material/colors';

const Table1 = () => {
    var [update,setUpdate]=useState(false);
    var [singleValue,setSingleValue]= useState([]);
    var [students,setStudents]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/see")
        .then((response)=>{
            setStudents(response.data);
            console.log(response.data)
        })
        .catch()
    },[])
    const UpdateValue = (value) => {
        console.log("update clicked",value)
        setSingleValue(value);
        setUpdate(true);
        }
    
  
  const Del = (id) => {
    axios.delete("http://localhost:8080/delete/"+id)
    .then((response)=>{
        alert("deleted");
        window.location.reload(false)
        console.log(response.data)

    })
    .catch(err=>console.log(err))}

    var finalJSX=  <div style={{paddingTop:"50px"}}>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell >Name</TableCell>
                    <TableCell >Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((val,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{val.sname}</TableCell>
                            <TableCell>{val.sgrade}</TableCell>
                            <TableCell><Button onClick={()=>Del(val._id)}>Delete</Button></TableCell>
                            <TableCell><Button onClick={()=>UpdateValue(val)}>Update</Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
</div>
if(update){
    finalJSX = <Add1 data={singleValue} method="put"/>
}
  return (
   finalJSX
  )
}

export default Table1
