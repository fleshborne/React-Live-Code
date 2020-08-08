import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ColorContext from './ColorContext';

const allTheInputs = [
  { id: 1, label: 'One', name: 'one' },
  { id: 2, label: 'Two', name: 'two' },
  { id: 3, label: 'Three', name: 'three' },
  { id: 4, label: 'Four', name: 'four' },
];

function App() {
  const [colors, setColors] = useState({});
  function handleChange(event) {
    const { name, value } = event.target;
    const newState = { ...colors, [name]: value };
    setColors(newState);
  }

  return (
    <ColorContext.Provider value={colors}>
      <div className='App'>
        <header className='App-header'>
          <h1> All of the Colors!</h1>
          {allTheInputs.map((input) => (
            <Input
              handleChange={handleChange}
              key={input.id}
              label={input.label}
              name={input.name}
              value={colors[input.name]}
            />
          ))}

          {/* <Input label={'Two'} value={colorOne} handleChange={handleChange} />
        <Input label={'Three'} value={colorOne} handleChange={handleChange} />
        <Input label={'Four'} value={colorOne} handleChange={handleChange} /> */}
          {/* <label>
          {' '}
          Two
          <input
            type='text'
            placeholder='enter a color!'
            style={{ background: 'blue' }}
          />
        </label>
        <label>
          {' '}
          Three
          <input
            type='text'
            placeholder='enter a color!'
            style={{ background: '#bada55' }}
          />
        </label>
        <label>
          {' '}
          Four
          <input
            type='text'
            placeholder='enter a color!'
            style={{ background: 'orange' }}
          />
        </label> */}
        </header>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
