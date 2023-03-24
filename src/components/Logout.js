import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    // Send a logout request to the server
    fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      // Redirect to the login page
      history.push('/login');
    });
  }, [history]);

  return null;
}

export default Logout;
