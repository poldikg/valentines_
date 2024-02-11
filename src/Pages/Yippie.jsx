import React from "react";
import catgif from "../cat-cat-jumping.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Yippie.css"

const Yippie = () => {
    return (
        <div>   
            <h1> YIPIEEEEEEEEEEEEE 😸😸😺😺 </h1>
            <img src={catgif} alt="" srcset="" />
            <p> There is more!!!!</p>
            <p> Send me a screenshot of whatever you select as there isn't backend connected <br></br> Meaning your answers aren't saved anywhere and I can't see them </p>
            <button> <Link to="/Food" style={{ textDecoration: 'none', color:"blueviolet" }}>CLICK HERE LETS GOO</Link> </button>
        </div>
    )
}

export default Yippie;