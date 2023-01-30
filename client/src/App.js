import './App.css';
import React ,{ useEffect, useState  } from 'react'
import { Routes,  Route , useLocation} from 'react-router-dom';  
import Home from './pages/Home.js';
import axios from 'axios'
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Signup from './pages/Signup'
import ProtectedRoute from './ProtectedRoute';
import AddRes from './pages/AddRes';
import NavBar from './components/navbar/NavBar';
import SingleRes from './pages/SingleRes';
import MyRescipes from './pages/MyRescipes';

function App() {
  let location = useLocation()
  const [auth , setAuth] = useState()
  const [load , setLoad] = useState(true)
  axios.defaults.withCredentials = true
async function getauth(){
  setLoad(true)
  const res = await axios.get('http://localhost:5000/api/verif')
  setLoad(false)
  setAuth(res.data)
}
  useEffect(()=>{
    getauth()
    
},[location])

  return (
  <>
   <NavBar auth={auth} load={load}/>
   <Routes>
   
   <Route path='/'  element={<Home/>}/>
   <Route element={<ProtectedRoute auth={auth}  />}>
   <Route path='/recipes' element={<Recipes load={load}/>} exact/>
   <Route path='/addres' element={<AddRes load={load}/>} exact />
   <Route path='/recipes/:id' element={<SingleRes load={load}/>} exact/>
   <Route path='/Myrecipes' element={<MyRescipes load={load}/>} exact/>

   </Route>
     
     
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  
  </Routes>
  </>
  
    
 
  );
}

export default App;
