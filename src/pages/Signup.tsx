import styled from '@emotion/styled';
import React from 'react';
import { Flex } from '../components/ui/Flex';
import Layout from '../components/ui/Layout';
import Text from '../components/ui/Text';
import CreateAccountForm from '../features/createAccount/form';

const CreateAccount = () => {
  return (
    <Layout>
      <Flex>
        <CreateAccountContainer>
          <Flex dir="column" ai="start" jc="start" gap={18}>
            <Text variants="size32">Register</Text>
            <CreateAccountForm />
          </Flex>
        </CreateAccountContainer>
      </Flex>
    </Layout>
  );
};

export default CreateAccount;

const CreateAccountContainer = styled.div`
  width: 500px;
  background-color: #eee;
  padding: 32px 24px;
  border-radius: 8px;
`;
