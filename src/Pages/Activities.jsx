import React from "react";
import catgif from "../cat-cat-jumping.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Drinks.css"

const Activities = () => {
    let scuffedArrow = "<--"
    let foodPictures1 = [{ imgUrl: "arcade.jpg", foodName: "Arcade place we were at??"} ,{ imgUrl: "billard.jpg" , foodName: "Pool/Billiard"}, 
    { imgUrl: "movie.jpg", foodName: "Bing chillin with a movie"} , { imgUrl: "museum.jpg", foodName: "Visit a museum"} , { imgUrl: "walk.jpg", foodName: "A walkie"} , 
 { imgUrl: "other.png", foodName: "Something else"}]


    const food = foodPictures1.map((dish, index) => (
        <div className="divFoodPics" key={index}>
            <img className="foodPics" src={`/ActivitiesPictures/${dish.imgUrl}`} alt={dish.foodName} />
            <label class="container">{dish.foodName}
  <input className="checkboxEverything" type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    ));

    return (
        <div className="mainDiv">
             <h1> Any extra activities 🎉🍿</h1>
        <div className="mainFoodDiv">   
            {food}
        </div>
        <div className="divButtonsNavigation"> 
        <button> <Link to="/Dessert" style={{ textDecoration: 'none', color:"blueviolet" }}>PREVIOUS PAGE</Link> </button>
        <button> <Link to="/ThankYouuu" style={{ textDecoration: 'none', color:"blueviolet" }}>CLICK HERE AGAIN LETS GOO</Link> </button>
        </div>
        </div>
    )
}

export default Activities;