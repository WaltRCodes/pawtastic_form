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
          <label></label>
          <label></label>
        </div>
        <div>
          <label></label>
          <label></label>
        </div>
        <div>
          <label></label>
          <label></label>
        </div>
        <label></label>
        <div>
        <input type="button" value="Back"/>
        <input type="submit" value="Next"/>
        </div>
      </form>
    );
  }
  
}

export default App;
