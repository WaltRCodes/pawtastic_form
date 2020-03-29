import React, {Component} from 'react';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      name:'',
      breed:'',
      birthday:new Date().toString(),
      gender:'',
      spayedOrNeutered:'',
      weight:''
    };

    this.handleName = this.handleName.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
  }
  handleBirthday(event){
    
    console.log(event.target.value);
    this.setState({birthday: new Date(event.target.value).toString()});
  }
  handleChange(event) {
    
  }
  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleBreed(event) {
    this.setState({breed: event.target.value});
  }
  render(){
    return (
      <form onSubmit={this.handleChange}>
        <div className="row">
          <label>
            Name
            <input type="text" onChange={this.handleName} placeholder="Pet's name"/>
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
            <input type="text" placeholder="Pet's breed" onChange={this.handleBreed}/>
          </label>
          <label>
            Birthday
            <input type="date" onChange={this.handleBirthday}/>
          </label>
        </div>
        <div className="row">
          <label>
            Gender
            <input type="checkbox" id="toggle" className="checkbox" onChange={this.handleChange}/>  
            <div htmlFor="toggle" className="switch">
              <span>Male</span>
              <span>Female</span>
            </div>
          </label>
          <label>
            Spayed or Neutered
            <input type="checkbox" id="toggle2" className="checkbox" onChange={this.handleChange}/>  
            <div htmlFor="toggle2" className="switch">
              <span>Spayed</span>
              <span>Neutered</span>
            </div>
          </label>
        </div>
        <label>
          Weight
          <div className="row weightContainer">
            <input type="radio" id="twentyfive" name="weight" value="" onChange={this.handleChange}/>
            <label htmlFor="twentyfive" className="weight">0-25 lbs</label>
            <input type="radio" id="fifty" name="weight" value="" onChange={this.handleChange}/>
            <label htmlFor="fifty" className="weight">25-50 lbs</label>
            <input type="radio" id="seventyfive" name="weight" value="" onChange={this.handleChange}/>
            <label htmlFor="seventyfive" className="weight">50-100 lbs</label>
            <input type="radio" id="hundred" name="weight" value="" onChange={this.handleChange}/>
            <label htmlFor="hundred" className="weight">100+ lbs</label>
            <div className="replacement"></div>
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
