import React, {Component} from "react";
import './App.css';
import Name from './components/name'; 

class App extends Component{
  render() {
    return (
      <div>
      <Name name='Jordan' age='26'/>
    </div>
    ); 
  }
}


export default App;
