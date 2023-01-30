import React from 'react'
import './addres.css'
import { useState } from 'react'
import { storage } from '../Firebase'
import {ref , uploadBytes , getDownloadURL} from "firebase/storage"
import axios from 'axios'
function AddRes() {
  const [image , setImage] = useState()
  const [values , setValues] = useState({
    titre : "",
    des : ""

  })
async function handlesubmit(){
  const imageref = ref(storage , "images"+image.name)
  const username = window.sessionStorage.getItem('username')
  const id = window.sessionStorage.getItem('id')
 try{
 const response = await uploadBytes(imageref ,image) 
  const link = await getDownloadURL(imageref)
  const res = await axios.post('http://localhost:5000/api/addpost',{
    id ,
    titre : values.titre,
    des : values.des ,
    username ,
    pic : link 
  })
  console.log(res)
  
 }catch(e){
  console.log(e.message)
 }
  


}
console.log(values)
  return (
    <div className='addres'>
      <div className='addtit'>ADD RECIPE</div>
    <div class="input-group">
    <label class="label">recipe name</label>
    <input  class="input" type="text" onChange={(e)=>{
      setValues({...values,titre : e.target.value})
    }} />
    <div></div></div>
    <div class="input-group">
    <label class="label">recipe des</label>
    <textarea onChange={(e)=>{
      setValues({...values,des : e.target.value})
    }} />
    <div></div></div>
    <input class="upload" type='file' onChange={(e)=>{
      if(e.target.files[0]){
        setImage(e.target.files[0])
      }
    }}  />
      <div className='addbtn' onClick={handlesubmit}>submit</div>
    </div>
  )
}

export default AddRes