import React from 'react'
import './home.css'
import bg from './back.jpg'
function Home() {
 const witha =  document.documentElement.scrollWidth ;
 console.log(witha)
  return (
    <div className='home'>
        <div className='image-container'>
        <img className="bg-image" width={witha} src={bg}/>
        <div class="image-caption">
          <div className='headline'>
          WELCOME TO RECIPES WORLD
          </div>
        
         <div className='line'>
         A food recipe website is an online platform that offers 
         various recipes for cooking various dishes, organized by meal course, dietary restriction or cuisine type.<br/> Users can search, save and share their favorite recipes.
         </div>
         
          </div>
        </div>
     
 
    
    </div>
  )
}

export default Home