import React, { useState } from 'react';
import { Button, Input } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(username, password);
      // Redirect to home or another page after successful login
    } catch (err) {
      setError('Invalid username or password');
    }
  }

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br />
        <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <Button variant='contained' color='success' style={{ backgroundColor: 'green', color: 'white' }} type='submit'>Login</Button>
      </form>
    </div>
  );
}

export default Login;