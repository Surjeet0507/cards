import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
// import styled from 'styled-components';
import {  Routes,Route} from 'react-router-dom'





function App() {
  return (
    <>
    

<Routes>
  <Route path='/'element={ <Signup/>}></Route>
  <Route path='/Login'element={<Login/>}></Route> 
   <Route path='/Forget'element={<Forgot/>}></Route>
</Routes>


   
   

    </>
  );
}

export default App;