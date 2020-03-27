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
        <div className="row">
          <label>
            Name
            <input type="text" placeholder="Pet's name"/>
          </label>
          <label>
            <br/>
            <input type="button" value="Logo"/>
          </label>
          <br/>
          Upload a photo
        </div>
        <div className="row">
          <label>
            Breed
            <input type="text" placeholder="Pet's breed"/>
          </label>
          <label>
            Birthday
            <input type="date"/>
          </label>
        </div>
        <div className="row">
          <label>
            Gender
            <input type="checkbox"/> 
          </label>
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
