
import React,{ Component } from 'react';

class Weather extends Component{

    render() {
       return(
        <table className="mdl-data-table mdl-js-data-table">
            <tbody>
                <tr>
                    <td className="mdl-data-table__cell--non-numeric">Humidity</td>
                    <td>{this.props.humidity} %</td>
                </tr>
                <tr>
                    <td className="mdl-data-table__cell--non-numeric">Pressure</td>
                    <td>{this.props.pressure} hpa</td>
                </tr>
                <tr>
                    <td className="mdl-data-table__cell--non-numeric">Sunrise</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td className="mdl-data-table__cell--non-numeric">Sunset</td>
                    <td>{this.props.sunset}</td>
                </tr>
            </tbody>
        </table>
       ); 
    }
}

export default Weather;