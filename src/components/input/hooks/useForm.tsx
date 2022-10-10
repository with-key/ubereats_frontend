import React, { useCallback, useEffect, useState } from 'react';

type Props<T, E> = {
  initialValues: T;
  validate?: (param: T) => E;
  onSubmit: () => void;
};

function useForm<T, E>({ initialValues, onSubmit, validate }: Props<T, E>) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<E | null>(null);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  // 버튼을 클릭했을 때 실행되는 함수
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate) {
      setErrors(validate(values));
    }
  }

  useEffect(() => {
    if (errors) {
      if (Object.keys(errors).length === 0) {
        onSubmit();
      }
    }
  }, [errors]);

  return {
    values,
    errors,
    changeHandler,
    submitHandler,
  };
}

export default useForm;
