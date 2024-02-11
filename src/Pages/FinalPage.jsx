import React from "react";
import catgif from "../cat-kiss2.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Yippie.css"

const FinalPage = () => {
    return (
        <div>   
            <h1> THANK YOUUU  </h1>
            <img src={catgif} alt="" srcset="" />
            <p> I will call you to arrange the time!!!</p>
        </div>
    )
}

export default FinalPage;