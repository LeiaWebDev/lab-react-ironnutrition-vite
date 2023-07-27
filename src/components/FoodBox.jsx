import React, { useState } from 'react'
import AddFoodForm from './AddFoodForm'

function FoodBox(props) {
    const food = props.food
    // const [foodlist, setFoodlist] = useState(0)

  return (

    <div key = {food.id}>
        <p>{food.name}</p>
        <img src={food.image}/>
        <p>Calories : {food.calories}</p>
        <p>Servings : {food.servings}</p>
        <p>
            <b>Total calories: {food.servings}*{food.calories}</b>kcal
        </p>
        {/* <button>Delete</button> */}
        <button onClick={() => props.handleDelete(food.id)}>Delete</button>
    </div>
  )
}

export default FoodBox