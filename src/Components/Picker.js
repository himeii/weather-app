import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import "./css/Picker.css";
import Select from 'react-select';


class Picker extends Component{

    constructor(){
        super();
        this.state = {
            city: this.props.city
        }
    }

    static defaultProps = {
        cities : [
            'Chicago', 'San Francisco', 'San Jose', 'New York', 'Los Angeles'
        ]
    };

    change(val){
        this.setState({city: val.value}, function () {
            this.props.changeCity(this.state.city);
        });
    }

    render(){

        let options = this.props.cities.map(city => {
            return {
                value : city, label : city
            }
        });

        return (
            <Select options = {options}
                    onChange = {this.change.bind(this)}
                    value = {this.state.city}
                    clearable = {false}
                    placeholder="Choose city"
                    className="select-custom"
            />
        );
    }
}

export default Picker;