import React, { Component } from 'react';
import logo from './image/caer.png';
import img from './image/carte.PNG';
import back from './image/background.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div >
    <img src={back} className="background" alt="background"/>
      <div className="credit-card">
        <h1 className='title'> credit card</h1>
        <div className='card'>
          <div className='parte-one'>
            <img src={logo} className='logo' alt="logo" />
            <p className="craditNumber">7253 3256 7895 1245</p>
            <div className='codeTwo'>
              <div className='secrCode'>
                <h2 className="code">5422</h2>
              </div>
              <div className="validation">
                <p className="valid">valid <br/> thru</p>
                <p className='month'>month/year <br/><span> 11/50</span></p>
              </div>
            </div>
            <p className="fin">cardholder</p>
          </div>
            <img className='visa' src={img} alt='visa' />
        </div>

      </div>
      </div>
    );
  }
}

export default App;
