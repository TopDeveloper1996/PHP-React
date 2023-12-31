import { useState } from 'react';
import CustomButton from './Components/customButton';
import CustomInputText from './Components/customInputText';
import CustomRecord from './Components/customRecord';
import logo from './logo.svg'

import './App.css';

function App() {

  const [records, setRecords] = useState([]);

  const [arrayText, setArrayText] = useState('');

  const handleNewArrayText = (NewArrayText) => {
    setArrayText(NewArrayText);
  }

  const handleDisplayResult = () => {

    let arrayInteger = arrayText.split(' ');
    
    //Only Using React Case
    
    // arrayInteger.sort((a, b) => a - b);
    // let n = 0;
    // arrayInteger.forEach(i => {
    //   if (i % 2 === 1) n++;
    // });

    // const newRecord = {
    //   array: arrayInteger.join(' '),
    //   max: arrayInteger[arrayInteger.length - 1],
    //   min: arrayInteger[0],
    //   noo: n
    // }
    // setRecords(prev => [...prev, newRecord]);

    //Using PHP
    const dataToSend = {'dataFromReact': arrayInteger}

    fetch('http://localhost/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    }).then((response) => response.json())
    .then((newRecord) => {
      setRecords(prev => [...prev, newRecord]);
    })

  }


  return (
    <div className='app-container'>
      <img src={logo}/>
      <div className='main-container'>
        <CustomInputText setText={handleNewArrayText} />
        <CustomButton display={handleDisplayResult} />
      </div>

      <div className='records-container'>
        {records.map((record, i) => {
          return <CustomRecord key={i} {...record} />
        })}
      </div>

    </div>
  );
}

export default App;
