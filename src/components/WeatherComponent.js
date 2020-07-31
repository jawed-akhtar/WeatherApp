import React from 'react';
import {Card, CardBody} from 'reactstrap';

const Weather = (props) => {

    let weatherclass = '';
    const id = props.id;
    if(id >= 200 && id <= 232)
    {
        weatherclass = 'wi wi-thunderstorm';
    }
    else if(id >= 300 && id <= 321) 
    {
        weatherclass = 'wi wi-sleet';
    }
    else if(id >= 500 && id <= 531) 
    {
        weatherclass = 'wi wi-storm-showers';
    }
    else if(id >= 600 && id <= 622) 
    {
        weatherclass = 'wi wi-snow';
    }
    else if(id >= 700 && id <= 781) 
    {
        weatherclass = 'wi wi-fog';
    }
    else if(id >= 801 && id <= 804) 
    {
        weatherclass = 'wi wi-day-fog';
    }
    else
    {
        weatherclass = 'wi wi-day-sunny';
    }

    return (
        <div className="col-8 p-1 col-md-3 mx-auto" >
            <Card className="bg-primary">
                <CardBody>
                    <div className="col-12">
                        <h2 className="p-1">{props.city}, {props.country}</h2>
                        <h1 className="p-1">
                            <span className={weatherclass}></span>
                        </h1>
                        <h3 className="p-1">{props.description}</h3>
                        <h2 className="p-1">{props.temp}&deg;</h2>
                        <h4 className="p-1">
                            <span className="pr-3">Min: {props.mintemp}&deg;</span> 
                            <span>Max: {props.maxtemp}&deg;</span> 
                        </h4>
                        <h5>
                            <span className="pr-3">Humidity: {props.humidity}</span>
                            <span>Pressure: {props.pressure}</span>
                        </h5>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Weather;