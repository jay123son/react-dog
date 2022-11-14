import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

const URL =`https://dog.ceo/api/breeds/list/all`;
function BreedList ({post, getDogs}){
   
    return (
        <div>
         <h3 className='listfordog'>Click button below to get breeds </h3>
         <button className='all' onClick={getDogs}>Get List Of Breeds</button>
         <ul>
        {post && post.map((breedFamily, key) => {
                    
        
                    
    return (
        <ul key={key}>
         <h3>{breedFamily[0]}</h3>
         {breedFamily[1].length > 0 && breedFamily[1].map((breed, key) => {
                                
                                
                                
    return <p key={key}>-{breed}</p>
        }) }
        </ul>
    )
})}
     </ul>
    </div>


    );  
  };


export default BreedList