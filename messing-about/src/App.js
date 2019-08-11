import React, {Component} from "react";
import './App.css';
import Details from './components/details'; 
import Likes from './components/likes';
import NavBar from './components/navbar';

class App extends Component{
  render() {
    return (
      <div><center>
      <NavBar/>
      <h3>Details</h3>
      <Details name='Jordan' age='26'/>
      <h3>Preferences</h3>
      <Likes faveFood='burrito' faveDrink='coffee'/>
      </center>
    </div>
    ); 
  }
}
// React calls the Name component with 'Jordan' and '26' as the props 
// if name was in Name class component it would be a state not a prop

export default App;
