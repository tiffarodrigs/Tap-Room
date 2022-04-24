import React from 'react';
import MenuList from './MenuList';
import NewMenuForm from './NewMenuForm';
import MenuDetail from './MenuDetail';

class BarControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false,
      mainMenuList : [],
      selectedMenu : null,
      sellFlag :null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick =()=>{
    if(this.state.selectedMenu!=null){
      this.setState({
        formVisibleOnPage: false,
        selectedMenu: null     
      });
    } else{
      this.setState(prevState=>({
      formVisibleOnPage : !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewMenuToList = (newMenu) =>{
    const newMainMenuList = this.state.mainMenuList.concat(newMenu);
    this.setState({mainMenuList :newMainMenuList,
    formVisibleOnPage : false })
  }
  handleChangingSelectedMenu = (id) =>{
    
    const selectedMenu = this.state.mainMenuList.filter(menu=>menu.id === id)[0];
    this.setState({selectedMenu : selectedMenu,sellFlag :false});
  }
  handleSellingPint = (id) => {
    const selectedMenu = this.state.mainMenuList.filter(menu=>menu.id === id)[0];
    if(selectedMenu.pint>0){
      selectedMenu.pint = (selectedMenu.pint) -1;
    } 
    this.setState({selectedMenu : selectedMenu,sellFlag :true });
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;

    if(this.state.selectedMenu != null){
      if(this.state.sellFlag === true)
      {
        currentlyVisibleState =<MenuList 
        menuList = {this.state.mainMenuList} 
        onMenuSelection = {this.handleChangingSelectedMenu}
        onSellPint = {this.handleSellingPint}/>
        buttonText ="Add new menu"
      }
      else{
      currentlyVisibleState= <MenuDetail 
      menu = {this.state.selectedMenu} />
      buttonText = "Return to menu List";
      }
    }
   else if(this.state.formVisibleOnPage){
      currentlyVisibleState =<NewMenuForm onNewMenuCreation={this.handleAddingNewMenuToList}/>
      buttonText ="Return to menu List"
    }
    else {
      currentlyVisibleState =<MenuList 
      menuList = {this.state.mainMenuList} 
      onMenuSelection = {this.handleChangingSelectedMenu}
      onSellPint = {this.handleSellingPint}/>
      buttonText ="Add new menu"
      }
   

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default BarControl ;