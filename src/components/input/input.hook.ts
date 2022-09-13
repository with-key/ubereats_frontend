import React, { useState } from 'react';

export default function useInput(defaultValue: string) {
  const [value, setValue] = useState<string>(defaultValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return { value, onChangeHandler };
}
