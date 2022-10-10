import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '../components/ui/Flex';
import Layout from '../components/ui/Layout';
import LoginForm from '../features/login/form';
import Text from '../components/ui/Text';

const Login = () => {
  return (
    <Layout>
      <Flex>
        <StLoginFormContainer>
          <Flex dir="column" ai="start" jc="start" gap={18}>
            <Text variants="size32">Login</Text>
            <LoginForm />
          </Flex>
        </StLoginFormContainer>
      </Flex>
    </Layout>
  );
};

export default Login;

const StLoginFormContainer = styled.div`
  width: 500px;
  background-color: #eee;
  padding: 32px 24px;
  border-radius: 8px;
`;
