import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVolunteer, setIsVolunteer] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (isVolunteer) {
      await login(username, password, 'volunteer');
    } else {
      await login(username, password);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <Input.Password placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label style={{ marginBottom: '10px' }}>
        <input type='checkbox' checked={isVolunteer} onChange={() => setIsVolunteer(!isVolunteer)} /> Accesso come volontario
      </label>
      <br />
      <Button onClick={handleLogin} style={{ backgroundColor: '#2E8B57', color: 'white' }}>Login</Button>
    </div>
  );
}

export default Login;