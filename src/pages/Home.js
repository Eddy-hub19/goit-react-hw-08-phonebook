import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Welcome to your phone book page.</h2>
      <p>Please </p>
      <Link to="/register">Register</Link>
      <h2>or</h2>
      <i>
        <Link to="/login">login</Link>
      </i>
    </div>
  );
};
