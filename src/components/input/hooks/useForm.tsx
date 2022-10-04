import React, { useEffect, useState } from 'react';
import { object } from 'yup';

type Props<T, E> = {
  initialValues: T;
  validate?: (param: T) => E;
  onSubmit: () => void;
};

function useForm<T, E>({ initialValues, onSubmit, validate }: Props<T, E>) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<E>();

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate) {
      setErrors(validate(values));
    }

    // 모든 validation을 통과했을 때 submit해야 함
  }

  useEffect(() => {
    if (errors) {
      if (Object.keys(errors).length === 0) {
        onSubmit();
      }
    }
  }, [errors]);
  // error msg

  return {
    values,
    errors,
    onChangeHandler,
    onSubmitHandler,
  };
}

export default useForm;
