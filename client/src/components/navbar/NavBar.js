import React   from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Link } from 'react-router-dom'
import logo from './logo.png'

function NavBar(props) {
  axios.defaults.withCredentials = true
  let navigate = useNavigate()
  const logout = async  ()=>{
    try{
      const response = await axios.get('http://localhost:5000/api/logout')
      navigate('/')
      console.log(response)
    }  catch(e){
      console.log(e.message)
    }
    

  } 
  if(props.load===true){
    return(<></>)
  }else{
    return (
  
      <nav  className="shift">
         <div className='logo'>
           <img  src={logo} height={50} />
         </div>
         
         <ul>
        <li><Link to='/'>Home</Link></li>
        {props.auth  &&<li><Link to='/addres'>Add recipe</Link></li>}
         {!props.auth  &&<li><Link to='/login'>Login</Link></li>}
         {!props.auth  &&<li><Link to='/signup'>Signup</Link></li>}
         {props.auth  &&<li><Link to='/recipes'>Recipes</Link></li>}
         {props.auth  &&<li><Link to='/Myrecipes'>My recipes</Link></li>}
         {props.auth  &&<li onClick={logout}><Link>Logout</Link></li>}
         
        
       </ul>
         
   
      </nav>
   
     )

  }
  
}

export default NavBar