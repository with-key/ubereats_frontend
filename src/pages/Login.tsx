import React from 'react';
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
import FormError from '../components/input/elem/FormError';
import { gql, useMutation } from '@apollo/client';
import { LoginMutation, LoginMutationVariables } from '../generated/graphql';

// 클라이언트에서 GQL 요청하기
const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

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

  const [loginMutation, { loading, error, data }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION);

  function onSubmit() {
    const { email, password } = values;
    loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
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
              <FormError>
                {errors?.email?.isError && errors.email.message}
              </FormError>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={onChangeHandler}
              />
              <FormError>
                {errors?.password?.isError && errors.password.message}
              </FormError>
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
