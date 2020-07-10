import React from 'react';

import { InputWrapper } from './styles';


export const TextInput = ({
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};
