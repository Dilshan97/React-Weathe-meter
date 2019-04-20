
import React,{ Component } from 'react';

class Form extends Component{

    render() {
       return(
            <form onSubmit={this.props.getWeather}>

                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" name="city" value="Homagama"/>
                  <label className="mdl-textfield__label">Type your City</label>
                </div>

                <div className="mdl-textfield mdl-js-textfield">
                    <br/>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Get data</button>
                </div>

            </form> 
       ); 
    }
}

export default Form;