import React from 'react';
import './customInputText.css'

export function CustomInputText({ setText }) {

    const handleInputChange = (event) => {
        const data = event.target.value;
        setText(data);
    };

    return (
        <div className="input-container">
            <i className="fa fa-laptop icon" />
            <input className="input-field" type='text' placeholder="Input Integer Array" onChange={handleInputChange} />
        </div>
    );
}