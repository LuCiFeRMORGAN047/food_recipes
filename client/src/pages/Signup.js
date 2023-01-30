import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
  const [values , setValues] = useState({
    email : "" ,
    password : "" , 
    username : ""
  })
  let navigate = useNavigate()
  axios.defaults.withCredentials = true
  async function HandleSignup(e){
    e.preventDefault()
    try{
        const response = await axios.post('http://localhost:5000/api/signup' , {
          email : values.email ,
          password : values.password ,
          username : values.username
        })
        window.sessionStorage.setItem('id',response.data.id)
        window.sessionStorage.setItem('username',response.data.username)
        navigate('/recipes')
    }catch(e){

    }
  }
  return (
    <div className='login'>
         <form className='loginform' onSubmit={HandleSignup}>
      <div className="input-group">
    <label className="label">Username</label>
    <input name="username" id="username" className="input"  onChange={(e)=> setValues({...values , username : e.target.value})}/>
    <div>
    </div>
    </div>
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
  <span>SIGNUP</span>
</button>
      </form>
      
    </div>
  )
}

export default Signup