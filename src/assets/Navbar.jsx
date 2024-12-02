import { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [time, setTime]=useState(new Date().toLocaleTimeString());
    const [dates,setDates]=useState(new Date().toLocaleDateString());

    useEffect(()=>{
      const tii= setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
        setDates(new Date().toLocaleDateString())
      }, 1000);
      return ()=> clearInterval(tii);
    }, [])
  return (
    <div className="navbar">
      
        <div className="title">
            <h1><span >Text</span>
            <span style={{color: "rgb(218, 191, 71)"}}>Utils</span></h1>
        </div>
        <div className="time">
            <h3 id="current-time" >Time : {time}<br/>   Date  :  {dates}</h3>
        </div>
      
    </div>
  )
}

export default Navbar
