import React from 'react';
import './App.css';

class App extends React.Component {
 constructor() {
   super()
   this.dropdown = React.createRef()
 }
//  this.state = {

//  }


 render() {
   return (
    <div>
      <div className='img'>
        <nav>
          
          <div className='name'>Start Bootstrap</div>

          <div id='button-container'>
            <button className='button'>SERVICES</button>
            <button className='button'>PORTFOLIO</button>
            <button className='button'>ABOUT</button>
            <button className='button'>TEAM</button>
            <button className='button'>CONTACT</button>
          </div>
        </nav>

        <div className='word-container'>
          <div className='welcome'>Welcome To Our Studio!</div>
          <div className='meet'>IT'S NICE TO MEET YOU</div>
          <div className='tell'>TELL ME MORE</div>
      </div>

      </div>



    </div>
   )
 }
}
export default App;
