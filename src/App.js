// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Table1 from './components/Table1';
import StateBasics from './components/StateBasics';
import First from './components/First';
import Navbar from './components/Navbar';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<StateBasics/>} />
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Table1/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/axios' element={<ApiGet/>}/>

      </Routes>
    </div>
    
  );
}

export default App;
