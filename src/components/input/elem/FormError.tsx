import React from 'react';

type Props = {
  errorMessage: string;
};

const FormError = ({ errorMessage }: Props) => {
  return <div>{errorMessage}</div>;
};

export default FormError;
