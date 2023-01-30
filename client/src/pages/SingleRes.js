import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './singleres.css'
function SingleRes(props) {
  const [btn, setBtn] = useState(true)
  const [infos , setInfos] = useState({
    _id : '' ,
    pic :'' ,
    titre : '',
    des : '' ,
    username : ''
    })
  let {id} = useParams()
  const _id = window.sessionStorage.getItem('id')  
  const userName = window.sessionStorage.getItem('username')  
  async function save(){
    try{
      const response = await axios.post('http://localhost:5000/api/save',{
        resid : infos._id,
        id : _id
      })
      console.log(response.data)
    }catch(e){
        console.log(e.message)
    }
  }
  async function getInfos(){
    try{
        const response = await axios.post('http://localhost:5000/api/getSingle',{
          id
        })
        setInfos(response.data)
        if(response.data.username===userName){
          setBtn(true)
        }else{
          setBtn(false)
        }
        console.log(response.data)
    }catch(e){

    }
  }
  useEffect(()=>{
    getInfos()
  },[])
  if(props.load===true){
    return (<></>)
   }else{return (
    <div className='single'>
      <div className='left'>
      <div className='img'>
        <img src={infos.pic} height={200} width={150}  />
          </div> 
        <div className='tit'>
            {infos.titre}
          </div>       
      </div>
      <div className='right'>
      <div className='tit'>
            {infos.titre}
          </div>
          <div className='des'>
            {infos.des}
            </div> 
            <div className='cardoptions'>
    <button disabled={btn} onClick={save} type="button" class="fill">SAVE</button>

    </div>        
      </div>
     
    </div>
  )}
  
}

export default SingleRes