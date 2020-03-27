import React, {Component} from 'react';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      name:'',
      breed:'',
      birthday:'',
      gender:'',
      spayedOrNeutered:'',
      weight:''
    };
  }

  render(){
    return (
      <form>
        <div>
        <input type="submit" value="Next"/>
        </div>
      </form>
    );
  }
  
}

export default App;
