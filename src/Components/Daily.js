import React, { Component } from 'react';
import './css/Daily.css';
import uuid from 'uuid';

class Daily extends Component{

    render(){
        return (
            <div key={uuid.v4()} className="col-md-2 day">
                <i className={"wi wi-" + this.props.day.icon}/>
                <p className="icon-name">{this.props.day.icon.replace(/-/g," ")}</p>
                <div className="text">
                    <p className="little">Max: {this.props.day.temperatureMax}&deg;C</p>
                    <p className="little">Min: {this.props.day.temperatureMin}&deg;C</p>
                    <p className="little">{this.props.day.summary}</p>
                </div>

            </div>

        )
    }

}

export default Daily;