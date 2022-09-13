import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Flex } from '../components/ui/Flex';

export default function Login() {
  const { register } = useForm();
  return (
    <Flex>
      <Input name="id" />
    </Flex>
  );
}
