import React from 'react';
import './customButton.css'

export function CustomButton({display}){
    return (
        <button className='custom-button' onClick={display}>Display</button>
    );
}