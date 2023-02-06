import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from 'components/App.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <h1>YOUR PHONE BOOK</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
