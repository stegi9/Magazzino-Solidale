import React from 'react';
import { Button } from '@mui/material';

interface LoginProps {
  user: any;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  if (user.role === 'admin') { // Aggiungi codice per l'accesso amministratore
    return <div>Accesso Amministratore</div>
  } else if (user.role === 'volunteer') { // Aggiungi codice per l'accesso volontario
    return <div>Accesso Volontario</div>
  } else { // Aggiungi codice per l'accesso utente normale
    return (
      <Button variant="contained" color="success">
        Login
      </Button>
    );
  }
};

export default Login;