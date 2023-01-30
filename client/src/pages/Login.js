import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
function Login() {
  const [values , setValues] = useState({
    email : "" ,
    password : "" , 
    username : ""
  })
  axios.defaults.withCredentials = true
const navigate = useNavigate()
    async function HandleLogin(e){
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:5000/api/login' , {
        email : values.email ,
        password : values.password
      })
      window.sessionStorage.setItem('id',response.data.id)
      window.sessionStorage.setItem('username',response.data.username)
      console.log(response.data)

        navigate('/recipes')
      
      
  }catch(e){
    console.log(e.message)
  }
  }
  return (
    <div className='login' >
      <form className='loginform' onSubmit={HandleLogin}>
  
      <div className="input-group">
    <label className="label">Email address</label>
    <input autoComplete='on' name="Email" id="Email" className="input"  onChange={(e)=> setValues({...values , email : e.target.value})}/>
    <div>
    </div>
    </div>

    <div className="input-group">
    <label className="label">Password</label>
    <input autoComplete="off" name="password" id="password" className="input" type="password" onChange={(e)=> setValues({...values , password : e.target.value})}/>
    <div>
    </div>
    </div>
    <button>
  <span>LOGIN</span>
</button>
      </form>
      
      </div>
  )
}

export default Login