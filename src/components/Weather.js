
import React,{ Component } from 'react';

class Weather extends Component{

    render() {
       return(
            <div>
                {this.props.temperture}<br/>
                {this.props.city}<br/>
                {this.props.country}<br/>
                {this.props.humidity}<br/>
                {this.props.description}<br/>
            </div>
       ); 
    }
}

export default Weather;