import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Picker from './Components/Picker';
import Weather from "./Components/Weather";

class App extends Component {

  constructor(){
      super();
      this.state = {
          city: "Chicago",
          temperature: 0,
          humidity: 0,
          wind_speed: 0,
          icon: "",
          summary: "",
          dailies: [],
          imageURL: ""
      }
  }


  componentWillMount(){
      this.changeCity("Chicago");
  }

    static toJSONkey(city){
        return city.toLowerCase().replace(/\s+/g, '');
    }

  changeCity(newCity){

      $.ajax({
          url: 'https://publicdata-weather.firebaseio.com/' + App.toJSONkey(newCity) + '.json',
          dataType: 'json',
          success : function (data) {
              this.setState({
                  city : newCity,
                  temperature : ((data.currently.apparentTemperature - 32) * 5/9).toFixed(0),
                  humidity : data.currently.humidity,
                  wind_speed : data.currently.windSpeed,
                  icon : data.currently.icon,
                  summary : data.currently.summary,
                  dailies : data.daily.data,
                  imageURL: "./wp/" + data.currently.icon + ".jpg"
              });
          }.bind(this)
      });

  }

  render() {
    let backgroundURL = "url(" + this.state.imageURL + ")";
    let style = {
        backgroundImage: backgroundURL
    };
    let data_art = "./wp/data-art-logo.svg";
    let contentClassName = "App content " + this.state.icon;

    return (
      <div className="body">
          <div className="background" style={style}>
          </div>
          <div className={contentClassName}>
              <header>
                  <div className="row">
                      <div className="col-md-3 cn">
                          <a href="https://dataart.ua" target="_blank" rel="noopener noreferrer">
                              <img src={data_art} alt="" className="data-art"/>
                          </a>
                      </div>
                      <div className="col-md-3"/>
                      <div className="col-md-3"/>
                      <div className="col-md-3">
                          <Picker city={this.state.city} changeCity = {this.changeCity.bind(this)}/>
                      </div>
                  </div>



              </header>
              <div className="container show-weather">
                  <div className="row">
                      <h3 className="text-center city-name">{this.state.city}</h3>
                      <Weather city = {this.state.city}
                               temperature = {this.state.temperature}
                               humidity = {this.state.humidity}
                               wind_speed = {this.state.wind_speed}
                               icon = {this.state.icon}
                               summary = {this.state.summary}
                               dailies = {this.state.dailies}
                      />
                  </div>
              </div>

          </div>
          <div className="footer">
              <div className="copyright container">
                  <ul>
                      <li>
                          &copy; Made by
                          <a href="https://www.linkedin.com/in/sergey-breus-959b45134/" target="_blank" rel="noopener noreferrer"> Sergey Breus</a>
                          , 2017
                      </li>
                      <li>
                          as a university practice task on <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React.js</a>
                      </li>
                  </ul>

              </div>

          </div>
      </div>

    );
  }
}

export default App;
