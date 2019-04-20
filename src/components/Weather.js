
import React,{ Component } from 'react';

class Weather extends Component{

    render() {
       return(
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
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
                            <td className="mdl-data-table__cell--non-numeric">Wind</td>
                            <td>Speed,{this.props.wind} m/s<br/>Deg {this.props.deg}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
       ); 
    }
}

export default Weather;