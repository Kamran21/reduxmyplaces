import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

import Routes from './routes';
import Nav from '../components/common/nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <header className="App-header">
          <img src={logo} className="App-header__logo" alt="logo" />
          <h1 className="App-header__title">Welcome To WellDone App</h1> 
        </header>

        <div class="container">
          <Routes/>
        </div>

        <footer>
          <Nav/>
        </footer>
        
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
