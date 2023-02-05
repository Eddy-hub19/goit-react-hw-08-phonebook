import { Button } from '@mui/material';
import { Input, Label, Title } from 'components/App.styled';
import {logIn} from 'redux/auth/operations'

const { useDispatch } = require('react-redux');

export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Title>Sign In</Title>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <div>
        <Button type="submit">Log In</Button>
      </div>
    </form>
  );
};
