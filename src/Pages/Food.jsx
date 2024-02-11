import React from "react";
import catgif from "../cat-cat-jumping.gif"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Food.css"


const Food = () => {
    let scuffedArrow = "<--"
    let foodPictures1 = [{ imgUrl: "pasta.jpg", foodName: "Pasta"} ,{ imgUrl: "sushi.jpg" , foodName: "Sushi"}, 
    { imgUrl: "dumplings.jpg", foodName: "Dumplings"} , { imgUrl: "pizza.jpg", foodName: "Pizza"} , { imgUrl: "ramen.jpg", foodName: "Ramen"} , 
    { imgUrl: "curry.jpg", foodName: "Curry"} , { imgUrl: "other.png", foodName: "Something else"} ,]


    const food = foodPictures1.map((dish, index) => (
        <div className="divFoodPics" key={index}>
            <img className="foodPics" src={`/FoodPictures/${dish.imgUrl}`} alt={dish.foodName} />
            <label class="container">{dish.foodName}
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    ));

    return (
        <div className="mainDiv">
             <h1> What we munchin? 😋😋😋</h1>
        <div className="mainFoodDiv">   
            {food}
        </div>
        <div className="divButtonsNavigation"> 
        <button> <Link to="/Yippie" style={{ textDecoration: 'none', color:"blueviolet" }}> PREVIOUS PAGE </Link> </button>
        <button> <Link to="/Drinks" style={{ textDecoration: 'none', color:"blueviolet" }}>CLICK HERE AGAIN LETS GOO</Link> </button>
        </div>
        </div>
    )
}

export default Food;