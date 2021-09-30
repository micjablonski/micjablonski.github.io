import React, {Component} from 'react';
import './Licznik.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';


class Licznik extends Component {
    
    constructor(props) {
        super(props) 
        this.state =  {
            counterValue: this.props.initValue,
            currentInputValue: 0,
        };
    }

    changeValue = (action) => {
                
        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
        
            if (action === 'add') {
                currentCounterValue += parseInt(this.state.currentInputValue);
                

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;

            } else {
                currentCounterValue = 0;
            }
      
                return ({
                    counterValue: currentCounterValue
                });
        });
    
    }


    inputChange = (event) => { //Obiekt zdarzenia
        this.setState({currentInputValue: event.target.value})
        console.log(event.target.value);
        
                
        
    
    }

    render() {

        return (
            <div className = 'counter'> Licznik: 
                <Display displayValue={this.state.counterValue} /> 
                <ButtonsPanel buttonMethod={this.changeValue} /> 
                {/* Krok: <input ref={(data) => { this._inputStep = data} } type="number"/> */}
                Krok: <input onChange={this.inputChange} type="number" value={this.state.currentInputValue}/>

                
            </div>
        );
    }           
}
export default Licznik;