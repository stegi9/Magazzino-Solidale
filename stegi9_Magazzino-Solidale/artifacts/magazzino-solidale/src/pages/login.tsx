import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const { login, logout, user } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (role === 'admin') {
      await login('admin');
    } else if (role === 'volunteer') {
      await login('volunteer');
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="role">Ruolo:</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="admin">Amministratore</option>
          <option value="volunteer">Volontario</option>
        </select>
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;