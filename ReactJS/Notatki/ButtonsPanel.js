import React from 'react';
import './ButtonsPanel.css';

 
function ButtonsPanel(props) {
//Po kliknięciu w przycisk mamy funkcję strzałkową
    return (
        <div className="buttons-panel"> 
            
            <button className="buttonsPanel" onClick={() => {
                props.buttonMethod('add');
            }}>Ad1</button> 

            <button className="buttonsPanel" onClick={() => {
                props.buttonMethod('reinit');
            }}>ReInit</button> 

            <button className="buttonsPanel" onClick={() => {
                props.buttonMethod('reset');
            }}>Reset</button> 

        </div>
    );
}

export default ButtonsPanel;