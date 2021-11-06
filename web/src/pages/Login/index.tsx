import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Content, FormInputLabel, Title } from './styles';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormData) => console.log('Form data', data);

  return (
    <Container>
      <Title>
        This is my title quest it
        <Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInputLabel>Email</FormInputLabel>

            <input
              placeholder="Digite seu email"
              {...register('email', {
                required: true,
              })}
            />
            <FormInputLabel>Senha</FormInputLabel>
            <input type="password" placeholder="Digite sua senha" {...register('password')}></input>

            <span>Esqueci minha senha :(</span>

            <button type="submit">Entrar</button>
          </form>

          <Link to="#">Ou cadastre-se</Link>
        </Content>
      </Title>
    </Container>
  );
};

export default Login;
