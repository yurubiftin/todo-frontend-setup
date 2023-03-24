import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();


    // Send a create user request to the server
    fetch('/api/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then(response => {
      if (response.ok) {
        // Redirect to the login page
        history.push('/login');
      } else {
        // Display an error message
        alert('Failed to create user');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create user</button>
    </form>
  );
}

export default CreateUser;
