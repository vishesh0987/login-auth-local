import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Menshop from './Components/Menshop';
import Navbar from './Components/Navbar';
import Womenshop from './Components/Womenshop';
import Kidshop from './Components/Kidshop';
import Login from './Components/Login';
import Signin from './Components/Signin'
import Footer from './Components/Footer';
import Mycart from './Components/Mycart';
import ProtectedRoute from './Services/ProtectedRoute';

function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Menshop' element={<Menshop/>}/>
  <Route path='/Womenshop' element={<Womenshop/>}/>
  <Route path='/Kidshop' element={<Kidshop/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signin' element={<Signin/>}/>
  <Route path='/' element={<ProtectedRoute/>}/>
  <Route path='/Mycart' element={<Mycart/>}/>
</Routes>
<Footer/>

    </>
  );
}

export default App;
