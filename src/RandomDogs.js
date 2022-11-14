import React, { useState } from "react";


const RandomDogs = ({setRandomDogBreed, getRandomDog, randomDog}) => {
const [randomBreedInput, setRandomBreedInput] = useState('')
const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
    }
    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        getRandomDog()
    }

    

    return(
        <div className="randomdogpic">
         <h1>Dog pics</h1>  
         <h2>Click Above To see options of dogs avaliable</h2>
         <h3>refresh to go back</h3>
        <div className="form">
         <input type='text' placeholder="enter dog breed" onChange={handleChange}></input>
         <button onClick={handleSubmit}>random pic</button>
        </div>
         {randomDog && <img src={randomDog}></img>}
        </div>
    )
    
}

export default RandomDogs