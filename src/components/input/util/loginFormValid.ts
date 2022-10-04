type LoginFormValid = {
  email: string;
  password: string;
};

export type LoginFormValidErrors = {
  email?: {
    isError: boolean;
    message: string;
  };

  password?: {
    isError: boolean;
    message: string;
  };
};

export function loginFormValid({ email, password }: LoginFormValid) {
  const errors: LoginFormValidErrors = {};

  if (email === '') {
    errors['email'] = {
      isError: true,
      message: '이메일은 필수값입니다.',
    };
  }

  if (password === '') {
    errors['password'] = {
      isError: true,
      message: '패스워드는 필수값입니다.',
    };
  }

  return errors;
}
