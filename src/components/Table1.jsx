import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// import { red } from '@mui/material/colors';

const Table1 = () => {
    var names = [{name:"Aswathy",age:21},{name:"Mariya",age:20},{name:"Maya",age:21}]
    
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white",backgroundColor:"black",fontFamily:"cursive",fontSize:"15px"}}>Name</TableCell>
                        <TableCell style={{color:"white",backgroundColor:"black",fontFamily:"cursive",fontSize:"15"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{value.name}</TableCell>
                            {<TableCell>{value.age}</TableCell>}

                        </TableRow>

                    )
                    }
                    )}
                  
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
};

export default Table1
