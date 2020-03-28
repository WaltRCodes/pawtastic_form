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

    this.handleName = this.handleName.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
  }
  handleName() {

  }
  handleBreed() {

  }
  render(){
    return (
      <form>
        <div className="row">
          <label>
            Name
            <input type="text" value={this.state.name}placeholder="Pet's name"/>
          </label>
          <label>
            <br />
            <div className="row">
              <input type="button" value="Logo" id="logoButton"/>
              Upload a photo
            </div>
          </label>
        </div>
        <div className="row">
          <label>
            Breed
            <input type="text" value={this.state.breed}placeholder="Pet's breed"/>
          </label>
          <label>
            Birthday
            <input type="date"/>
          </label>
        </div>
        <div className="row">
          <label>
            Gender
            <input type="checkbox" id="toggle" class="checkbox" />  
            <div for="toggle" class="switch"></div>
          </label>
          <label>
            Spayed or Neutered
            <input type="checkbox" id="toggle2" class="checkbox" />  
            <div for="toggle2" class="switch"></div>
          </label>
        </div>
        <label></label>
        <div  className="row">
          <label>
            <input type="button" value="Back"/>
          </label>
          <label>
            <input type="submit" value="Next"/>
          </label>
        </div>
      </form>
    );
  }
  
}

export default App;
