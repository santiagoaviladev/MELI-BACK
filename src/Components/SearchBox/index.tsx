import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./styles.css"
import logo from "../../Assets/img/Logo_ML.png"





const SearchBox = (query:String) => {

    

    const initialMsg = "  Nunca dejes de buscar"

    const [textInput, setTextInput] = useState(initialMsg)

    const url = `/items/search=${textInput}`

   
    
    return (
        <div className="search-container">
            <div className="content-container">
            <div className="logo">
                <img src={logo} alt="MERCADO LIBRE"></img>
            </div>
            <div className="bar">
               <input type="text" 
               value={textInput}
               onFocus={()=>{
                   if(textInput === initialMsg)
                   {
                       setTextInput("")
                   }
               }}
               onBlur={()=>
               {
                   
                 if(textInput.trim()==="")
                    {
                        setTextInput(initialMsg)
                    }
       
                 }}
               onChange={(e)=>setTextInput(e.target.value)}
               name="searchbox"
               ></input>

            </div>
            <div className="icon">
                <div className="icon-container">
                <NavLink to={url} className="search-icon">   </NavLink>
                </div>
            </div>
            </div>
        </div>
    )
}



export default SearchBox
