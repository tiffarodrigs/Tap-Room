import React from "react";
import PropTypes from "prop-types";
function MenuDetail(props){
  const {menu}=props;
  return(
    <React.Fragment>
      <h1>Menu Detail</h1>
      <h4>Name : {menu.menu_name}</h4>
      <h4>Brand : <em>{menu.brand}</em></h4>
      <h4>Price : <em>{menu.price}</em></h4>
      <h4>Alcohol Content : <em>{menu.alcohol_content}%</em></h4>
      <h4>Pints Available : <em>{menu.pint}</em></h4>
      <hr/>
    </React.Fragment>
  );
  
}
MenuDetail.propTypes = {
  menu: PropTypes.object
}
export default MenuDetail; 