import { Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
const Add1 = (props) => {
 
    console.log("add poage:",props.method)
    var [datas,setDatas] = useState(props.data)
    const inptHandler = (z)=>{
    //    console.lo g(z.target.);
        const {name,value} = z.target
        setDatas((datas)=>({...datas,[name]:value}));
        console.log(datas)
    }
    // const Nme = (f)=>{
    //     setPname(f.target.value);
        
    // }
    // const Grd = (e)=>{
    //     setPgrade(e.target.value);
        
    // }
    // const Dis = ()=>{
    //     setKname(pname);
    //     setKgrade(pgrade);
    // }
    const addValues = ()=>{
        if(props.method === "post"){
        console.log("clicked",datas);
        axios.post("http://localhost:8080/create",datas)
        .then((response)=>{
            console.log("data",response.data);
            alert("successfully added data")
        })
        .catch(err=>console.log(err))
    }
        if(props.method === "put"){
        axios.put("http://localhost:8080/e/"+datas._id,datas)
        .then((response)=>{
            console.log("put data"+response.data);
            alert("success");
            window.location.reload(false);
        })
        .catch((err)=>{console.log(err)});
        }
    };
  return (
    <div style={{paddingTop:'100px'}}>
        <TextField variant='outlined' label="Name" name='sname' value={datas.sname} onChange={inptHandler} ></TextField>
        <TextField variant='outlined' label="Grade" name='sgrade' value={datas.sgrade} onChange={inptHandler} ></TextField>
        <Button color='error' onClick={addValues}>Add</Button>


      
    </div>
  )
}

export default Add1