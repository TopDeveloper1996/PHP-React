import React from 'react';
import './customRecord.css'

export default function CustomRecord(props) {

    return (
        <>
            <div className='custom-record-container'>

                <div className='array-source-container'>
                    <span className='label'>ARRAY</span>
                    <p className='array'>{props.array}</p>
                </div>
                <hr />
                <div className='result-container'>

                    <div className='result'>
                        <span className='label'>MAX</span>
                        <p className='value'>{props.max}</p>
                    </div>

                    <div className='result'>
                        <span className='label'>MIN</span>
                        <p className='value'>{props.min}</p>
                    </div>

                    <div className='result'>
                        <span className='label'>NOO</span>
                        <p className='value'>{props.noo}</p>
                    </div>

                </div>

            </div>
        </>
    );
}