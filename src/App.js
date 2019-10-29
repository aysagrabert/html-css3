import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
 constructor() {
   super()
   this.dropdown = React.createRef()
 }
 animate = () => {
   this.setState({
    
   })
 }

 toggleShow = () => {
   console.log(this.dropdown.current)
   let {current} = this.dropdown

   if(current.classList.contains('show-animation')){
    current.classList.add('hide-animation')
    current.classList.remove('show-animation')
   } else{
    current.classList.add('show-animation')
    current.classList.remove('hide-animation')
   }
 }

 render() {
   return (
      <div>
        <nav>


        <div className='name'>Start Bootstrap</div>

          <i id='hamburger-icon'  className='fas fa-bars fa-2x' onClick={this.toggleShow}/>

         <div id='button-container'>
            <div className='button'>SERVICES</div>
            <div className='button'>PORTFOLIO</div>
            <div className='button'>ABOUT</div>
            <div className='button'>TEAM</div>
            <div className='button'>CONTACT</div>
         </div>

        </nav>

        <div className='dropdown' ref={this.dropdown}>
            <div className='dropdown-button'>Home</div>
            <div className='dropdown-button'>About</div>
            <div className='dropdown-button'>Services</div>
            <div className='dropdown-button'>Contact</div>
        </div>

        
        <div className='word-container'>
          <div className='welcome'>Welcome To Our Studio!</div>

          <div className='meet'>IT'S NICE TO MEET YOU</div>

          <div className='tell'>TELL ME MORE</div>
          
      </div>
      

        </div>
    
   )
 }
}
export default App;

