import React from 'react';
import './customButton.css'

export default function CustomButton({display}){
    return (
        <button className='custom-button' onClick={display}>Display</button>
    );
}