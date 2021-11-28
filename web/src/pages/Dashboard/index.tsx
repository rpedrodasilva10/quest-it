import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(async () => signOut(), [signOut]);

  return (
    <>
      <h1>Dash</h1>
      <button onClick={handleSignOut}>Sair</button>
    </>
  );
};

export default Dashboard;
