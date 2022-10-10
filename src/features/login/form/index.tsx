import React from 'react';
import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import Button from '../../../components/button';
import Input from '../../../components/input';
import FormError from '../../../components/input/elem/FormError';
import useForm from '../../../components/input/hooks/useForm';
import {
  loginFormValid,
  LoginFormValidErrors,
} from '../../../components/input/util/loginFormValid';
import { Flex } from '../../../components/ui/Flex';
import {
  LoginMutation,
  LoginMutationVariables,
} from '../../../generated/graphql';

type LoginForm = {
  email: string;
  password: string;
};

// query 작성하기
const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

const LoginForm = () => {
  const [loginMutation, { loading, error, data }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
  });

  const {
    values,
    errors,
    changeHandler: onChangeHandler,
    submitHandler: onSubmitHandler,
  } = useForm<LoginForm, LoginFormValidErrors>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginFormValid,
    onSubmit,
  });

  function onCompleted(data: LoginMutation) {
    if (data.login.ok) {
      console.log(data.login.token);
    } else {
      console.log(data);
    }
  }

  function onSubmit() {
    if (!loading) {
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
  }

  return (
    <StForm onSubmit={onSubmitHandler}>
      <Flex dir="column" gap={12} jc="start">
        <Input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChangeHandler}
        />
        <FormError>{errors?.email?.isError && errors.email.message}</FormError>
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
        <Button isDisabled={loading}>{loading ? `로딩중` : `Go!`}</Button>
      </Flex>
    </StForm>
  );
};

export default LoginForm;

const StForm = styled.form`
  width: 100%;
`;
