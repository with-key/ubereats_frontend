import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../components/button';
import Input from '../../../components/input';
import useForm from '../../../components/input/hooks/useForm';
import { Flex } from '../../../components/ui/Flex';

type CreateAccountForm = {
  email: string;
  password: string;
};

const CREATE_ACCOUNT_MUTATION = gql`
  mutation login($createAccountInput: CreateAccountInput!) {
    createAccount(input: $CreateAccountInput) {
      ok
      error
    }
  }
`;

const CreateAccountForm = () => {
  const { values, changeHandler, submitHandler } = useForm<
    CreateAccountForm,
    any
  >({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  function onSubmit() {
    console.log('hello');
  }

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT_MUTATION);

  return (
    <StForm onSubmit={submitHandler}>
      <Flex dir="column" gap={12} jc="start">
        <Input
          placeholder="email"
          type="text"
          name="email"
          onChange={changeHandler}
          value={values.email}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={values.password}
        />
        <Button>회원가입</Button>
      </Flex>
    </StForm>
  );
};

export default CreateAccountForm;

const StForm = styled.form`
  width: 100%;
`;
