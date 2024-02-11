import React from "react";
import catgif from "../cat-cat-jumping.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Drinks.css"

const Drinks = () => {
    let scuffedArrow = "<--"
    let foodPictures1 = [{ imgUrl: "bubbletea.jpg", foodName: "Bubbletea"} ,{ imgUrl: "cocktail.jpg" , foodName: "Any cocktails!!"}, 
    { imgUrl: "milkshake.jpg", foodName: "Milkshake"} , { imgUrl: "tea.jpg", foodName: "Tea"} , { imgUrl: "water.jpeg", foodName: "Water WE STAYIN HEALTHY??"} , 
    { imgUrl: "whiskey.jpg", foodName: "Whiskey(Disgusting)"} , { imgUrl: "other.png", foodName: "Something else"} ,]


    const food = foodPictures1.map((dish, index) => (
        <div className="divFoodPics" key={index}>
            <img className="foodPics" src={`/DrinkingPictures/${dish.imgUrl}`} alt={dish.foodName} />
            <label class="container">{dish.foodName}
  <input className="checkboxEverything" type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    ));

    return (
        <div className="mainDiv">
             <h1> What we chugging?? 🍸🥤</h1>
        <div className="mainFoodDiv">   
            {food}
        </div>
        <div className="divButtonsNavigation"> 
        <button> <Link to="/Food" style={{ textDecoration: 'none', color:"blueviolet" }}>PREVIOUS PAGE</Link> </button>
        <button> <Link to="/Dessert" style={{ textDecoration: 'none', color:"blueviolet" }}>CLICK HERE AGAIN LETS GOO</Link> </button>
        </div>
        </div>
    )
}

export default Drinks;