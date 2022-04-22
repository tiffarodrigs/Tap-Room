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

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(!this.state.formVisibleOnPage){
    currentlyVisibleState =<MenuList/>
    buttonText ="Add new menu"
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState =<NewMenuForm/>
      buttonText ="Return to menu List"
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