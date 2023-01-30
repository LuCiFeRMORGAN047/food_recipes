import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './recipes.css'
import ResCard from '../components/rescard/ResCard'
function Recipes(props) {

  
  axios.defaults.withCredentials = true
 const [data , setData] = useState([{
_id : '' ,
pic :'' ,
titre : '',
des : ''
}])
 async function getall(){
    try{
        const response = await axios.get('http://localhost:5000/api/posts')
          setData(response.data)
    }catch(e){
      console.log(e.message)
    }
 }
 useEffect(()=>{
    getall()
    
 },[])
 if(props.load===true){
  return (<></>)
 }else{
  return (
    <>
     <div className='titre'>All our recipes</div>
    <div className='recipes'>
   
  {data.map(e =>{
    return <ResCard username={e.username} titre={e.titre} id={e._id} pic={e.pic}  />})
    }
    </div>
    </>
    
  )
 }
 
}

export default Recipes