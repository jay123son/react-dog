import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";
import BreedList from './BreedsList';
import RandomDogs from './RandomDogs';
import Header from './Header';




const URL =`https://dog.ceo/api/breeds/list/all`;
function App(props) {
  
  const [currrentView, setCurrentView] = useState()
  const [post, setPost] = useState("");
  const setView = str => {
    setCurrentView(str)
  }
  const getDogs= (() => {
    axios.get(URL)
      .then(res => (Object.entries(res.data.message)))
      .then(res => setPost(res))
    });
    const [randomDog, setRandomDog] = useState()
    const [randomDogBreed, setRandomDogBreed] = useState()
    
    useEffect(() => {
      getRandomDog()
   
    }, [randomDogBreed])

    const getRandomDog = () => {
      randomDogBreed &&
      axios.get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
        .then(res => setRandomDog(res.data.message))
        .catch(err => alert('invalid breed try again'))
    }
    
    return (
   
  <div>
   <Header setView={setView}/>
   {currrentView === 'random dogs' ? <RandomDogs randomDogBreed = {randomDogBreed} randomDog = {randomDog} getRandomDog = {getRandomDog} setRandomDogBreed = {setRandomDogBreed}/> :  <BreedList post={post} getDogs={getDogs}/>}
  </div>
  );
};
    
   
export default App;