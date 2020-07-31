import React,{ Component } from 'react';
import Header from './components/HeaderComponent';
import FormComp from './components/FormComponent';
import Weather from './components/WeatherComponent';
import './App.css';

//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: '',
      humidity: '',
      pressure: '',
      temp: '',
      temp_max: '',
      temp_min: '',
      id: '',
      description: '',
      showWeather: false
    }

    // this.state = {
    //   city: "Kolkata",
    //   country: "IN",
    //   description: "haze",
    //   humidity: 94,
    //   id: 721,
    //   pressure: 998,
    //   showWeather: true,
    //   temp: 29,
    //   temp_max: 29,
    //   temp_min: 29,
    //   showWeather: true
    // }

  }

  getWeatherHandler = async (inputElem) => {
    const city = inputElem.city;
    const country = inputElem.country;

    if(city !== '' && country !=='')
    {
      const API_KEY = 'e98a69c4d9caa6da79ba58ba16ed0913';
      const api = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY;
      
      const api_call = await fetch(api);
      const response = await api_call.json();
  
      this.setState({
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        temp: this.calTemp(response.main.temp),
        temp_max: this.calTemp(response.main.temp_max),
        temp_min: this.calTemp(response.main.temp_min),
        id: response.weather[0].id,
        description: response.weather[0].description,
        showWeather: true
      })

      console.log(this.state);
    }
  }
  
  calTemp = (temp) => {
    return Math.floor(temp - 273.15)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <FormComp click={(inputElem) => this.getWeatherHandler(inputElem)}/>
        {/* <Weather city={this.state.city} country={this.state.country} humidity={this.state.humidity}
          pressure={this.state.pressure} temp={this.state.temp} maxtemp={this.state.temp_max} 
          mintemp={this.state.temp_min} id={this.state.id} description={this.state.description}/> */}
          {this.state.showWeather? <Weather city={this.state.city} country={this.state.country} humidity={this.state.humidity}
          pressure={this.state.pressure} temp={this.state.temp} maxtemp={this.state.temp_max} 
          mintemp={this.state.temp_min} id={this.state.id} description={this.state.description} /> : null}
      </div>
    );
  }
}

export default App;
