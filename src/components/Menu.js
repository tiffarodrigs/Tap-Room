import React from "react";
import PropTypes from "prop-types";
function Menu(props){
  return(
    <React.Fragment>
      <h3>{props.menu_name} - {props.price}</h3>
      <h3>{props.pint}</h3>
      <button onClick = {() => props.whenMenuClicked(props.id)}>Details</button>
      <button onClick= {()=> props.whenSellClicked(props.id)}>Sell Pint</button>
      <hr/>
    </React.Fragment>
  ); 
}

Menu.propTypes = {
  menu_name : PropTypes.string,
  brand : PropTypes.string,
  price : PropTypes.number,
  alcohol_content: PropTypes.number, 
  pint: PropTypes.number,
  id: PropTypes.string,
  whenMenuClicked: PropTypes.func,
  whenSellClicked : PropTypes.func
  
};
export default Menu; 