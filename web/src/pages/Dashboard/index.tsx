import React, { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Header, HeaderContainer, ProfileContainer } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(async () => signOut(), [signOut]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <ProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <p>
              Bem vindo, <strong>Renan!</strong>
            </p>
            <a href="#/" onClick={handleSignOut}>
              <FiLogOut /> Sair
            </a>
          </ProfileContainer>

          {/* <Link to="#">Home</Link> */}
        </HeaderContainer>
      </Header>
      <Container>
        <h1>Minhas tarefas</h1>
        <h1>Dash</h1>
        <h1>Dash</h1>
        <h1>Dash</h1>
      </Container>
    </>
  );
};

export default Dashboard;
