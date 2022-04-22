import React from "react";
import PropTypes from "prop-types";

function NewMenuForm(prop){
  
  function handleNewMenuFormSubmission(event){
    event.preventDefault();
    prop.onNewMenuCreation({
      name:event.target.name.value,
      brand : event.target.brand.value,
      price : event.target.price.value,
      alcohol_contents : event.target.alcohol_contents.value})
  }

  return(
    <React.Fragment>
      <h3> New Menu Form</h3>
      <form onSubmit = {handleNewMenuFormSubmission}>
        <input 
        type='text' 
        name ='name' 
        placeholder="name"/>
        <input 
        type='text' 
        name ='brand' 
        placeholder="brand"/>
        <input 
        type='number' 
        name ='price' 
        placeholder="price"/>
        <input 
        type="number" 
        name ='alcohol_content' 
        placeholder="alcohol content"/>
        <button type='submit'>Add</button> 
      </form>
    </React.Fragment>
  ); 
}
NewMenuForm.propTypes = {
  onNewMenuCreation: PropTypes.func
};

export default NewMenuForm;