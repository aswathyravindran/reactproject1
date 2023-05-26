import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Add1 from './component/Add1';
import { Table } from '@mui/material';
import Table1 from './component/Table1';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
   
      <Routes>
        <Route path='/Add1' element={<Add1 data={{sname:'',sgrade:''}} method="post"/>}></Route>
        <Route path='/Table1' element={<Table1/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
