import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';

function NewMenuForm(props){
  
  function handleNewMenuFormSubmission(event){
    event.preventDefault();
    props.onNewMenuCreation({
      menu_name:event.target.menu_name.value,
      brand : event.target.brand.value,
      price : event.target.price.value,
      alcohol_content : event.target.alcohol_content.value,
      pint : event.target.pint.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <h3> New Menu Form</h3>
      <form onSubmit = {handleNewMenuFormSubmission}>
        <label>Name : </label>
        <input 
        type='text' 
        name ='menu_name' 
        placeholder="name"/><br/>
        <label>Brand : </label>
        <input 
        type='text' 
        name ='brand' 
        placeholder="brand"/><br/>
        <label>Price : </label>
        <input 
        type='number' 
        name ='price' 
        placeholder="price"/><br></br>
        <label>Alcohol Content : </label>
        <input 
        type="number" 
        name ='alcohol_content' 
        placeholder="alcohol content"/><br/>
        <label>Quantity : </label>
        <input 
        type="number" 
        name ='pint' 
        placeholder="keg quanity"/><br/>
        <button type='submit'>Add</button> 
      </form>
    </React.Fragment>
  ); 
}
NewMenuForm.propTypes = {
  onNewMenuCreation: PropTypes.func
};

export default NewMenuForm;