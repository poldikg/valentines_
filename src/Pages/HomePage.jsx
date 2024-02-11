import React from "react";
import "./HomePage.css"
import { Outlet, Link, useLocation } from "react-router-dom";
import catFlowers from "../catFlowers.jpg"
const HomePage = () => {
    const handleButtonHover = (event) => {
        if (event.target.id === 'moveButton') {
            const button = event.target;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const newLeft = Math.random() * (screenWidth - button.offsetWidth);
            const newTop = Math.random() * (screenHeight - button.offsetHeight);
            button.style.left = `${newLeft}px`;
            button.style.top = `${newTop}px`;
        }
    };

    return (
        <div>
            <h1> Will you be my valentine?</h1>

<div className='buttonContainer'> 
<button> <Link to="/Yippie" style={{ textDecoration: 'none', color:"blueviolet" }}>Yes, Yippie!!</Link> </button>

<button id='moveButton' onMouseOver={handleButtonHover}>
    No, sadddd.
  </button>
   
</div>
<img className="catFlowers" src={catFlowers}/> 
        </div>
    )
}

export default HomePage;