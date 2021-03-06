import React from 'react';
import { Component } from 'react';

import MenuDrawer from './MenuDrawer';
import MenuDrawerWide from './MenuDrawerWide';



class App extends Component {
  render() {
    return(
      <div>
        <div>
          <MenuDrawer pathname={this.props.location.pathname} />
          <MenuDrawerWide pathname={this.props.location.pathname} />
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
