import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";
import Title from "./components/Title";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      temperture: '00.0',
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: "",
      pressure: undefined,
      temp_min: undefined,
      temp_max: undefined,
      wind: undefined,
      deg: undefined,
      sunrise: undefined,
      sunset: undefined,
      lon: undefined,
      lat: undefined,
      icon: undefined,
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
      icon: data.weather[0].icon,
      pressure: data.main.pressure,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      wind: data.wind.speed,
      deg: data.wind.deg,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      lon: data.coord.lon,
      lat: data.coord.lat,
      error: ""
    })
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col"></div>

        <div className="mdl-cell mdl-cell--4-col" id="col_3">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text"><b>Weather Forcast</b></h2>
              </div>

              <div className="mdl-card__supporting-text">

                  <Title 
                    temperture = {this.state.temperture}
                    description ={this.state.description}
                    icon = {this.state.icon}
                    city = {this.state.city}
                    country = {this.state.country}
                    /> 

                  <Form getWeather={this.getWeather}/>
                  
                  <Weather
                    temperture = {this.state.temperture}
                    humidity = {this.state.humidity}
                    error = {this.state.error}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    pressure = {this.state.pressure}
                  />
              </div>

            <div className="mdl-card__menu">
                
            </div>

          </div>
        </div>
    </div>
    
    );
  }
}

export default App;
