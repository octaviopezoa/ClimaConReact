import React from 'react';

const WeatherInfo = props => {
    console.log(props);
    
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            {
                props.temperature ?
                <div className="card card-body">
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperatura: {props.temperature} ºC, {props.description} </p>
                    <p>Humedad: {props.humidity} </p>
                    <p>Velocidad viento: {props.wind_speed} </p>
                </div>
                :
                <div>
                    <p>Aún no hay resultados disponibles</p>
                </div>

            }

            
        </div>
        
    )
}

export default WeatherInfo;