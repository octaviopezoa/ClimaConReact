import React, { Component } from 'react';

import WeatherInfo from './components/WeatherInfo'

import Weatherform from './components/WeatherForm';

// importo key de openweather
import {WEATHER_KEY} from './keys';


class App extends Component {

    state = {
        temperature : '',
        description : '',
        humidity : '',
        wind_speed : '',
        city : '',
        country : '',
        error : null
        
    };
    
    getWeather = async e => {        

        e.preventDefault();
        const {city, country} =  e.target.elements;
        const cityV = city.value;
        const countryV = country.value;

        if (cityV && countryV) {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityV},${countryV}&appid=${WEATHER_KEY}&units=metric`;

            const response = await fetch(API_URL);
            const data = await response.json();
            
            this.setState ({
                temperature : data.main.temp,
                description : data.weather[0].description,
                humidity : data.main.humidity,
                wind_speed : data.wind.speed,
                city : data.name,
                country : data.sys.country,
                error : null
            });
        } else {
            this.setState ({error: "Ingrese ciudad y/o país"})
        }


    }

    render () {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <Weatherform getWeather = {this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;