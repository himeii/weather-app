import React, { Component } from 'react';
import uuid from 'uuid';
import './css/weather-icons.css';
import './css/font-awesome.css';
import './css/Weather.css';
import Daily from './Daily';

class Weather extends Component{

    render(){
        let dailies = this.props.dailies.slice(0,6).map(
            day => {
                return {
                    icon: day.icon,
                    temperatureMax: ((day.temperatureMax- 32) * 5/9).toFixed(0),
                    temperatureMin: ((day.temperatureMin- 32) * 5/9).toFixed(0),
                    summary: day.summary
                }
            }
        );

        return (
            <div className="weather">
                <div className="text-center heading">
                    <h2>Today Forecast</h2>
                </div>
                <div className="row today">
                    <div className="col-md-3 item day-icon">
                        <i className="fa fa-thermometer-half" aria-hidden="true"/>
                        <p className="info">{this.props.temperature}&deg;C</p>
                    </div>
                    <div className="col-md-3 item day-icon">
                        <i className="fa fa-tint" aria-hidden="true"/>
                        <p className="info">{this.props.humidity * 100}%</p>
                    </div>
                    <div className="col-md-3 item day-icon">
                        <i className="fa fa-compass" aria-hidden="true"/>
                        <p className="info">{this.props.wind_speed} m/s</p>
                    </div>
                    <div className="col-md-3 item day-icon">
                        <i className="fa fa-info" aria-hidden="true"/>
                        <p className="info">{this.props.summary}</p>
                    </div>
                </div>
                <div className="text-center heading">
                    <h2>Daily Forecast</h2>
                </div>

                <div className="row daily">
                    {dailies.map(
                        (day) => {
                            return (
                                <Daily key = {uuid.v4()} day = {day}/>
                            )
                        }
                    )}
                </div>
            </div>

        );
    }
}

export default Weather;