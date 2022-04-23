import React from "react";
import PropTypes from "prop-types";
function Menu(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenMenuClicked(props.id)}>
      <h3>{props.menu_name} - {props.price}</h3>
      
      <hr/>
      </div>
    </React.Fragment>
  ); 
}

Menu.propTypes = {
  menu_name : PropTypes.string,
  brand : PropTypes.string,
  price : PropTypes.number,
  alcohol_content: PropTypes.number, 
  id: PropTypes.string,
  whenMenuClicked: PropTypes.func
};
export default Menu; 