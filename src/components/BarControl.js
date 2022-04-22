import React from 'react';
import MenuList from './MenuList';
import NewMenuForm from './NewMenuForm';

class BarControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false,
      mainMenuList : [],
      selectedMenu : null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick =()=>{
    this.setState(prevState=>({
      formVisibleOnPage : !prevState.formVisibleOnPage
    }));
  }
  handleAddingNewTicketToList = (newMenu) =>{
    const newMainMenuList = this.state.mainMenuList.concat(newMenu);
    this.setState({mainMenuList :newMainMenuList,
    formVisibleOnPage : false })
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    
   if(this.state.formVisibleOnPage){
      currentlyVisibleState =<NewMenuForm onNewMenuCreation={this.handleAddingNewMenuToList}/>
      buttonText ="Return to menu List"
    }
    else {
      currentlyVisibleState =<MenuList menuList = {this.state.mainMenuList}/>
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