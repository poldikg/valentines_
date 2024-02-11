import React from "react";
import catgif from "../cat-cat-jumping.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Dessert.css"

const Dessert = () => {
    let scuffedArrow = "<--"
    let foodPictures1 = [{ imgUrl: "cake.jpg", foodName: "Cake"} ,{ imgUrl: "icecream.jpg" , foodName: "Ice Cream"}, 
    { imgUrl: "mochi.jpg", foodName: "Mochi"} , { imgUrl: "pie.jpg", foodName: "Pie"} , { imgUrl: "Souffle.jpg", foodName: "Souffle"} , 
    { imgUrl: "tiramisu.jpg", foodName: "Tiramisu"} , { imgUrl: "other.png", foodName: "Something else"} ,]


    const food = foodPictures1.map((dish, index) => (
        <div className="divFoodPics" key={index}>
            <img className="foodPics" src={`/DessertPictures/${dish.imgUrl}`} alt={dish.foodName} />
            <label class="container">{dish.foodName}
  <input className="checkboxEverything" type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    ));

    return (
        <div className="mainDiv">
             <h1> Diabetes?? 🍰🍩🍨</h1>
        <div className="mainFoodDiv">   
            {food}
        </div>
        <div className="divButtonsNavigation"> 
        <button> <Link to="/Drinks" style={{ textDecoration: 'none', color:"blueviolet" }}> PREVIOUS PAGE </Link> </button>
        <button> <Link to="/Activities" style={{ textDecoration: 'none', color:"blueviolet" }}>CLICK HERE AGAIN LETS GOO</Link> </button>
        </div>
        </div>
    )
}

export default Dessert;