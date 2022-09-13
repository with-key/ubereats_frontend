import React from 'react';
import styled from '@emotion/styled';
import { Input } from '../components/input';
import { Flex } from '../components/ui/Flex';
import Layout from '../components/ui/Layout';
import Text from '../components/ui/Text';
import { Button } from '../components/button';
import useInputs from '../components/input/hooks/useInput';

const StLoginFormContainer = styled.div`
  width: 500px;
  background-color: #eee;
  padding: 32px 24px;
  border-radius: 8px;
`;

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { onChangeHandler, inputs } = useInputs<LoginForm>({
    email: '',
    password: '',
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

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
                value={inputs.email}
                onChange={onChangeHandler}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={onChangeHandler}
              />
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
