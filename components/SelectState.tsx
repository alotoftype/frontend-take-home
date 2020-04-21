import React, {FunctionComponent} from 'react';
import states from '../data/states.json';

const SelectState: FunctionComponent<any> = (props) => (
  <select name={'state'} {...props}>
    {Object.entries(states).map(([code, name]) => (
      <option value={code} key={code}>
        {name}
      </option>
    ))}
  </select>
);

export default SelectState;
