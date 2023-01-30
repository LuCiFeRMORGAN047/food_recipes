import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './rescard.css'
function ResCard(props) {
 const id = window.sessionStorage.getItem('id')  
  async function save(){
    try{
      const response = await axios.post('http://localhost:5000/api/save',{
        resid : props.id,
        id
      })
      console.log(response.data)
    }catch(e){
        console.log(e.message)
    }
  }
  return (
    <div className='subcard'>
    <div>
    <img src={props.pic} height={100} width={100} alt='receipe'/>
    </div>
    <div className='cardtitre'>
     <Link to={'/recipes/'+props.id}>{props.titre}</Link> 
     {'@'+props.username}
    </div>
    <div className='cardoptions'>
    <button type="button" onClick={save}  class="fill">SAVE</button>

    </div>
  </div>
  )
}

export default ResCard