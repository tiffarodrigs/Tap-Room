import React from "react";
import PropTypes from "prop-types";
function MenuDetail(props){
  const {menu}=props;
  return(
    <React.Fragment>
      <h1>Menu Detail</h1>
      <h3>{menu.menu_name} - {menu.brand}</h3>
      <p><em>{menu.price}</em></p>
      <p><em>{menu.alcohol_content}</em></p>
      <p><em>{menu.pint}</em></p>
      <hr/>
    </React.Fragment>
  );
  
}
MenuDetail.propTypes = {
  menu: PropTypes.object
}
export default MenuDetail; 