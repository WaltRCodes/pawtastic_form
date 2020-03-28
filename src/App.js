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
            <div for="toggle" class="switch">
              <span>Male</span>
              <span>Female</span>
            </div>
          </label>
          <label>
            Spayed or Neutered
            <input type="checkbox" id="toggle2" class="checkbox" />  
            <div for="toggle2" class="switch">
              <span>Spayed</span>
              <span>Neutered</span>
            </div>
          </label>
        </div>
        <label>
          Weight
          <div>
            <span>0-25 lbs</span>
            <span>25-50 lbs</span>
            <span>50-100 lbs </span>
            <span>100+ lbs</span>
          </div>
        </label>
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
