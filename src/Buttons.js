import React from 'react';
import Button from './Button';
import "./App.css";

const Buttons = (props) => {

    return (  
        <section className="buttons">
        <Button handleClick={props.handleClick} context="Home"/>
        <Button handleClick={props.handleClick} context="Away"/>
        <Button handleClick={props.handleClick} context="Quarter"/>
      </section>
    );
}
 
export default Buttons;