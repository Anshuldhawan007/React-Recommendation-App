import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";

var foodDB = {
  NorthIndian: [
    { name: "CholeBhature", rating: "4/5" },
    { name: "Kachori", rating: "3.5/5" }
  ],
  SouthIndian: [
    { name: "Dosa", rating: "3/5" },
    { name: "Vada", rating: "4/5" }
  ],
  Chinese: [
    { name: "Chowmein", rating: "4/5" },
    { name: "Momos", rating: "5/5" }
  ]
};

console.log(Object.values(foodDB)[0][1]);
// var foodDB = [NorthIndian, SouthIndian, Chinese];

var foodMenuWeKnow = Object.keys(foodDB);
var foodContinentalItems = "";

// var foodContinentalItems = Object.keys(foodMenuWeKnow);

export default function App() {
  var [foodCategory, setFoodCategory] = useState("NorthIndian"); //This is working coz initially not assigned to NULL.
  // var [foodContinentalItems, setFoodContinentalItems] = useState("");

  function foodMenuClickEventHandler(foodCategory) {
    console.log(foodCategory);
    // console.log(foodContinentalItems);
    setFoodCategory(foodCategory);
    // setFoodContinentalItems(foodContinentalItems);

    // foodContinentalItems = foodDB[foodCategory];

    // foodCategory.map(function (foodContinentalItems) {
    //   // return { foodContinentalItems };
    //   setFoodContinentalItems(foodContinentalItems);
    // });

    // for (var i = 0; i < foodCategory.length; i++) {
    //   console.log(foodCategory[i].name, foodCategory[i].rating);
    // }
  }

  return (
    <div className="App">
      <h1>Food Recommendation</h1>
      <p style={{ padding: "1rem" }}>Checkout My Favourite Foods.</p>
      {foodMenuWeKnow.map(function (foodCategory) {
        return (
          <span
            style={{
              padding: "1rem",
              margin: "1rem 1rem",
              backgroundColor: "pink",
              outline: "solid"
            }}
            key={foodCategory}
            onClick={() => foodMenuClickEventHandler(foodCategory)}
          >
            {" "}
            {foodCategory}{" "}
          </span>
        );
      })}
      <p style={{ padding: "1rem 1rem" }}>Recommended Items.👇</p>

      {foodDB[foodCategory].map((foodCategory) => {
        return (
          <div
            style={{
              padding: "0.5rem",
              outline: "solid",
              margin: "auto",
              marginBottom: "1rem",
              width: "30%"
            }}
          >
            {foodCategory.name}
            <div
              style={{
                padding: "0.5rem",
                // outline: "inset",
                margin: "auto",
                width: "50%"
              }}
            >
              <small>{foodCategory.rating}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
