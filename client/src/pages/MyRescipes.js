import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResCard from '../components/rescard/ResCard'
import './myrecipes.css'
function MyRescipes(props) {
  const [saved , setSaved] = useState([])
  const [myres , setMyres] = useState([])
  const _id = window.sessionStorage.getItem('id')  
  async function getall(){
    try{
      const response = await axios.post('http://localhost:5000/api/getall',{
        id : _id
      })
      setSaved(response.data.saved)
      setMyres(response.data.myres)
    }catch(e){

    }
   
  }
  useEffect(()=>{
    getall()
  },[])
    if(props.load===true){
        return (<></>)
       }else{return (
        <div className='myres'>
            <div className='myposts'>
              <div className='mytit'>
                Your recipes
              </div>
              <div className='myrescipes'>
              {myres.map(e =>{
    return <ResCard username={e.username} titre={e.titre} id={e._id} pic={e.pic}  />})
    } 
              </div>
            </div>
            <div className='savedposts'>
              <div className='mytit'>
                saved recipes
              </div>
              <div className='myrescipes'>
              {saved.map(e =>{
    return <ResCard username={e.username} titre={e.titre} id={e._id} pic={e.pic}  />})
    }
              </div>
            </div>
        </div>
      )}
    
}

export default MyRescipes