import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Flex } from '../components/ui/Flex';
import Layout from '../components/ui/Layout';
import Text from '../components/ui/Text';
import { Button } from '../components/button';
import Input from '../components/input';
import useForm from '../components/input/hooks/useForm';
import {
  loginFormValid,
  LoginFormValidErrors,
} from '../components/input/util/loginFormValid';
import axios from 'axios';

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const { values, errors, onChangeHandler, onSubmitHandler } = useForm<
    LoginForm,
    LoginFormValidErrors
  >({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginFormValid,
    onSubmit,
  });

  async function onSubmit() {
    console.log('hello');
    // await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  return (
    <Layout>
      <Flex>
        <StLoginFormContainer>
          <form onSubmit={onSubmitHandler}>
            <Flex dir="column" gap={24} jc="start">
              <Text variants="size32">Login</Text>
              <Input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={onChangeHandler}
              />
              <div>{errors?.email?.isError && errors.email.message}</div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={onChangeHandler}
              />
              <div>{errors?.password?.isError && errors.password.message}</div>
              <Button>
                <Text variants="size16">Log In</Text>
              </Button>
            </Flex>
          </form>
        </StLoginFormContainer>
      </Flex>
    </Layout>
  );
}

export default Login;

const StLoginFormContainer = styled.div`
  width: 500px;
  background-color: #eee;
  padding: 32px 24px;
  border-radius: 8px;
`;
