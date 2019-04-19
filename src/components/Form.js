
import React,{ Component } from 'react';

class Form extends Component{

    render() {
       return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city"/><br/><br/>
                    <button>Get data</button>
                </form>
            </div>
       ); 
    }
}

export default Form;