import React, { useState } from 'react'
import FoodBox from './FoodBox'


function AddFoodForm(props) {

//const [allFoodBoxes, setAllFoodBoxes] = useState([foodList, {name: "0 and go"}])
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(0)
// const [filter, setFilter] = useState(0)

function handleName(event) {
    // console.log(event.target.value)
    setName(event.target.value)
}

function handleImage(event) {
    // console.log(event.target.value)
    setImage(event.target.value)
}

function handleServings(event) {
    // console.log(event.target.value)
    setServings(event.target.value)
}
function handleCalories(event) {
    // console.log(event.target.value)
    setCalories(event.target.value)
}

function handleSubmit(event){
    event.preventDefault()

    const newFoodBox = {
        id: crypto.randomUUID,
        name,
        calories,
        servings,
    }
    props.addedFoods(newFoodBox)
    //setAllFoodBoxes([...allFoodBoxes, newFoodBox])
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={handleName} type="text" id="name"/>
        </div>
        <div>
            <label htmlFor="image">Image</label>
            <input value={image} onChange={handleImage} type="text" id="image"/>
        </div>
        <div>
            <label htmlFor="calories">Calories</label>
            <input 
            value={calories} onChange={handleCalories} type="number" id="calories"/>
        </div>
        <div>
            <label htmlFor="servings">Servings</label>
            <input value={servings} onChange={handleServings} type="number" id="servings"/>
        </div>
        {/* <button>Create</button> */}
        <button onClick={handleSubmit}>Create</button>
    </form>    

    </div>
  )
}

export default AddFoodForm