import React, { useState } from 'react';

export default function useInputs<T>(defaultValue: T) {
  const [inputs, setInput] = useState<T>(defaultValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({ ...inputs, [name]: value });
  };

  return { inputs, onChangeHandler };
}
