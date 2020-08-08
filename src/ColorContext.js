import React from 'react';

const ColorContext = React.createContext({
  //  key:value pairs based on [name]: entered color value
  one: '',
  two: '',
  three: '',
  four: '',
});

export default ColorContext;
