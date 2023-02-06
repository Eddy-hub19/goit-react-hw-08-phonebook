import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'white', marginRight:'20px' }}>Welcome, {user.name}</p>
      <button style={{background: 'transparent'}} type="button" onClick={() => dispatch(logOut())}>
        Logout
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </button>
    </div>
  );
};
