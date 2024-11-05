import './App.css'
import React, { useEffect, useRef } from 'react'

import netflixLogo from './Assets/netflix_logo.png';
import search from './Assets/search.png';
import childLogo from './Assets/Netflix_child_login.png'
import bell from './Assets/bell.png'
import drop_down from'./Assets/down-arrow.png'
import banner from './Assets/hero_banner.jpg';
import title from './Assets/hero_title.png';
import play from './Assets/play_icon.png';
import info from './Assets/info_icon.png';
import { Cards_display } from './Cards';
export function App() {
 let ref = useRef()
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if (ref.current){
      if(window.scrollY>=80){
        ref.current.classList.add('nav-dark')
      }
      else{
        ref.current.classList.remove('nav-dark')
      }
    }})
  })
  return (
    <>
    <div className='container'>
      <div className='banner'>
      <img className='banner-img' src={banner}></img>
      </div>
      <div className='title'>
      <img src={title} className='title-img'></img>
      <p style={{color:'white', fontSize:'12px'}}>A young fighter travels to Australia to retrieve stolen elephants <br/> that were promised originally to the king of Thailand.</p>
      <button>Play<img style={{backgroundColor:'white', width:'20px'}} src={play} ></img></button>
      <button style={{backgroundColor:'grey',opacity:'0.7' , color:'white'}}>More<img style={{backgroundColor:'grey', width:'20px'}} src={info} ></img></button>
      </div>
      <div className='movies-dispaly'>
    <div>
      <Cards_display category = {"now_playing"} title={"Trending Movies"}/>
      </div>
      <div>
      <Cards_display category = {"popular"} title={"Popular Movies"}/>
      </div>
      <div>
      <Cards_display category = {"top_rated"} title={"Blockbustor Movies"}/>
      </div>
      <div>
      <Cards_display category = {"upcoming"} title={"Upcoming Movies"}/>
      </div>
      </div>
      </div>
    <div className='Total-Nav' ref={ref}>
    <div className='logo' style={{marginLeft:'10px', marginTop:'10px'}}>

      <img src={netflixLogo} className='logo-pic'></img>
    </div>

    <div className='Navbar'>
      <ul style={{listStyleType:'none'}} className='nav-left'>
        <li>Home</li>
        <li>Series</li>
        <li>Films</li>
        <li>News & Popular</li>
        <li>My List</li>
        <li>Browse by languages</li>
      </ul>
    </div>

    <div className='Navbar-login'>
      <ul style={{listStyleType:'none'}} className='nav-right'>
        <li><img src={search} className='search'/></li>
        <li>Children</li>
        <li><img src={bell} className='search' style={{width:'25px'}}/></li>
        <li style={{height:'50px'}} className='child-logo'><img src={childLogo} className='search' />  <p className='pop'><a href='' style={{color:'white'}}>Sign Out</a></p></li>
        <li><li><img src={drop_down} style={{width:'15px'}} className='search'/></li></li>
       
    
      </ul>
    </div>
    </div>
      
    </>
    
  )
}

