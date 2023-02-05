import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <link to="/contacts">Contacts</link>}
    </nav>
  );
};
