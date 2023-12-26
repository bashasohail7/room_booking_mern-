import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import parseWithOptions from 'date-fns/esm/fp/parseWithOptions/index.js'
export default function Hotel() {
  const [slideNumber,setSlideNumber]=useState(0)
  const[open,setOpen]=useState(false)
  const handleOpen=(i)=>{
    setSlideNumber(i)
    setOpen(true)
  }
  return (
    <>
   <Navbar/>
   <Header type='list'/>
   <div className="hotelContainer">
     {open &&
     <div className="slider">
<FontAwesomeIcon icon={faCircleXmark}/>
<FontAwesomeIcon icon={faCircleArrowLeft}/>
<div className="sliderWrapper">
  <img src={''} alt=""className='sliderImg' />
</div>
<FontAwesomeIcon icon={faCircleArrowRight}/>
     </div>}
     <div className="hotelWrapper">
       <button className="bookNow">Reserve or book now!</button>
       <h1 className="hotelTitle">Grand Hotel</h1>
       <div className="hotelAddress">
         <FontAwesomeIcon icon={faLocationDot}/>
         <span>Lorem ipsum dolor sit. </span>
       </div>
       <span className="hotelDistance">Lorem ipsum dolor sit amet consectetur.</span>
       <span className="hotelPriceHighlight">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </span>
       <div className="hotelImages">
         {/* { */}
           {/* parseWithOptions.map((photo,i)=>( */}
<div className="hotelImgWrapper">
  <img src="" onClick={handleOpen} alt="" />
</div>
           {/* )) */}
         {/* } */}
       </div>
     </div>
   <MailList/>
   <Footer/>
   </div>
    </>
  )
}
