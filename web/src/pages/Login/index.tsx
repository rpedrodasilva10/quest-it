import React from 'react';
import { useForm } from 'react-hook-form';
import { FiFacebook, FiGithub, FiInstagram, FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Content } from './styles';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log('Form data', data);

  return (
    <Container>
      <Content>
        <h3>Faça seu login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Digite seu email" icon={FiMail} name="email" register={register}></Input>
          <Input
            placeholder="Digite sua senha"
            icon={FiLock}
            name="password"
            register={register}
            type="password"
          ></Input>

          <span>Esqueci minha senha 😢</span>

          {/* <input type="submit" /> */}
          <Button icon={FiLogIn} type="submit">
            Entrar
          </Button>
        </form>
        <Link to="#">Ou cadastre-se</Link>
        {/* Social media */}

        <p>Cadastre-se usando:</p>

        <ul>
          <li>
            <FiFacebook size={20} />
          </li>
          <li>
            <FiGithub size={20} />
          </li>
          <li>
            <FiInstagram size={20} />
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Login;
