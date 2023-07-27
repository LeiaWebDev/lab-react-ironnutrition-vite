import "./App.css";
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";

const foodList = foodsJson

// const foodList = {
//   id: "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
//   name: "Pizza",
//   calories: 400,
//   image: "https://i.imgur.com/eTmWoAN.png",
//   servings: 1
// }


function App() {
  const [foods, setFoods] = useState(foodList)
  

  function handleDelete(id) {
    const udatedFoodBoxes = foods.filter((food) => food.id!== id)
    setFoods(udatedFoodBoxes)
  }

  /////// to work on
  function addFoods (newFood){

    setFoods([...foods, newFood])
  }
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <h2>Add Food Entry</h2>
    <AddFoodForm addedFoods = {addFoods}/>

      <h2>Food List</h2>

    {foods.map((food) =>{
      return <FoodBox food = {food} key= {food.id} handleDelete = {handleDelete}/>

    })}
    

    {/* <FoodBox food={
      {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }
    }/>

    <FoodBox/> */}

    
    </div>
  );
}

export default App;
