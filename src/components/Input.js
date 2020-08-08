import React, { Component, useContext } from 'react';
import ColorContext from '../ColorContext';

// export default class Input extends Component {
//   render() {
//     return (
//       <div>
//         <label>
//           {' '}
//           One
//           <input
//             type='text'
//             placeholder='enter a color!'
//             style={{ background: 'red' }}
//           />
//         </label>
//       </div>
//     );
//   }
// }

function Input(props) {
  const { handleChange, label, name, value } = props;

  const colors = useContext(ColorContext);

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        {label}
        <br />
        <input
          name={name}
          type='text'
          placeholder='enter a color!'
          style={{ background: colors[name] }}
          onChange={handleChange}
          value={colors[name]}
        />
      </label>
    </div>
  );
}

export default Input;
