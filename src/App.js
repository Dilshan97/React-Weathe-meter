import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {

  constructor(props){
    super(props);
    //this.getWeather();
    this.state = {
      temperture: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_all = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},lk&appid=8a1e7f96689eacff4a4cef41c5cc1901&units=metric`);
    const data = await api_all.json();
    console.log(data);
    console.log(city);

    this.setState({
      temperture: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperture = {this.state.temperture}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description ={this.state.description}
          error = {this.state.error}
        />
      </div>  
    );
  }
}

export default App;
