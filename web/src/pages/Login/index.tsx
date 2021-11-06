import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, FormInputLabel, LoginForm, Title } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Title>
        This is my title quest it
        <Content>
          <LoginForm>
            <FormInputLabel>Email</FormInputLabel>
            <input placeholder="Digite seu email" name="email"></input>
            <FormInputLabel>Senha</FormInputLabel>
            <input type="password" placeholder="Digite sua senha" name="password"></input>

            <span>Esqueci minha senha :(</span>

            <button>Login</button>
          </LoginForm>

          <Link to="#">Ou cadastre-se</Link>
        </Content>
      </Title>
    </Container>
  );
};

export default Login;
