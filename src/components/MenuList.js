import React from "react";
import Menu from "./Menu";
import PropTypes from "prop-types";

function MenuList(props){
  return(
    <React.Fragment>
      <h3>Menu List</h3>
      {props.menuList.map((menu)=>
      <Menu
      whenMenuClicked = {props.onMenuSelection}
      name = {menu.name}
      brand = {menu.brand}
      price ={menu.price}
      alcohol_content={menu.alcohol_content}
      id = {menu.id}
      key = {menu.id}/>

      )}
    </React.Fragment>
  );

}
MenuList.propTypes = {
  ticketList : PropTypes.array,
  onMenuSelection : PropTypes.func

};

export default MenuList; 