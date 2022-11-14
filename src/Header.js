import React from "react";


const Header = ({setView}) => {
    
    return(
        <div className="heading">
         <h1 className="headings"> My Dog Website</h1>
         <div className="links">
         <button className="all" onClick={() => {setView('breed list')}}>All breeds</button>
         <button className="all" onClick={() => {setView('random dogs')}}>random pic of dogs</button>
        </div>
        </div>
    )
}


export default Header