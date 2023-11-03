import { useState } from 'react';
import './App.css';
import { CustomButton } from './components/customButton';
import { CustomInputText } from './components/customInputText';
import CustomRecord from './components/customRecord';

function App() {

  const [records, setRecords] = useState([]);

  const [arrayText, setArrayText] = useState('');

  const handleNewArrayText = (NewArrayText) => {
    setArrayText(NewArrayText);
  }

  const handleDisplayResult = () => {

    let arrayInteger = arrayText.split(' ');
    arrayInteger.sort((a, b) => a - b);

    let n = 0;
    arrayInteger.forEach(i => {
      if (i % 2 === 1) n++;
    });

    const newRecord = {
      array: arrayInteger.join(' '),
      max: arrayInteger[arrayInteger.length - 1],
      min: arrayInteger[0],
      noo: n
    }

    setRecords(prev => [...prev, newRecord]);
  }


  return (
    <div className='app-container'>

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
