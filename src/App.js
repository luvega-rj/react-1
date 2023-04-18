import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Friend'
import Location from './components/location'


// function App() {
// return (
// <div>
// <h1>Find A Person </h1>
// <img
// className="App-img" 
// src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
// alt="imagess" 
// />
// </div>
// );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Location />
        <h1>Find A Person </h1>
<img
className="App-img" 
src="https://images.unsplash.com/photo-1644994474943-6918220e745b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8ODY0MDQyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
alt="imagess" 
/>

      </div>
      

    );
  }
}

export default App;






// import Location from './components/Location'

// function App() {
// return (
// <div>
// <h1>Find A Person </h1>
// <img
// className="App-img" 
// src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
// alt="imagess" 
// />
// </div>
// );
// }

// export default App

