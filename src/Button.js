import React from 'react';
import "./App.css";

const Button = (props) => {

    return (  
        <div className={props.context==="Home"? "homeButtons" : "awayButtons"}>
          <button className={props.context==="Home"? "homeButtons__touchdown" : "awayButtons__touchdown"} onClick ={()=>props.handleClick(7, props.context)}>{props.context==="Quarter" ? "Raise Quarter" : `${props.context} Touchdown`}</button>
          <button className={props.context==="Home"? "homeButtons__fieldGoal" : "awayButtons__fieldGoal"} onClick ={()=>props.handleClick(3, props.context)}>{props.context==="Quarter" ? "Lower Quarter" : `${props.context} Field Goal`}</button>
        </div>
    );
}
 
export default Button;