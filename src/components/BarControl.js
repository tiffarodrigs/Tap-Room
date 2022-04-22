import React from 'react';
import MenuDetail from './MenuDetail';

class BarControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false,
      mainMenuList : [],
      selectedMenu : null
    };
  }
  render(){
    let currentlyVisibleState= null;
    if(!this.state.formVisibleOnPage)
    currentlyVisibleState =<MenuDetail/>
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default BarControl ;