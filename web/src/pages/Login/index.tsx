import axios, { AxiosError } from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RiFacebookCircleFill, RiGithubFill, RiLock2Fill, RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Content, SocialMediaGroup } from './styles';

type FormData = {
  email: string;
  password: string;
};

type AuthData = {
  user: {
    id: number;
    name: string;
    email: string;
    nickname: string;
    type: string;
  };
  token: string;
};

const Login: React.FC = () => {
  // useEffect(() => {
  //   api.get('/parents');
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const doLogin = async ({ email, password }: FormData) => {
    try {
      const response = await api.post<AuthData>('/authenticate', {
        email,
        password,
      });

      console.log('Login realizado com sucesso', response);
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          alert('Credenciais inválidas');
        }
      } else {
        console.log('Other', error);
      }
    }
  };

  return (
    <Container>
      <Content>
        <h3>Entrar</h3>
        <form onSubmit={handleSubmit(doLogin)}>
          <Input
            placeholder="Digite seu email"
            icon={RiMailFill}
            name="email"
            register={register}
            registerOptions={{
              required: true,
            }}
          />
          <Input
            placeholder="Digite sua senha"
            icon={RiLock2Fill}
            name="password"
            register={register}
            registerOptions={{
              required: true,
            }}
            type="password"
          />

          <Link to="#">Esqueceu sua senha?</Link>

          <Button type="submit">Entrar</Button>
        </form>

        <Link to="#">Criar conta</Link>

        {/* Social media */}

        <p>Entrar com</p>

        <SocialMediaGroup>
          <ul>
            <li>
              <RiFacebookCircleFill color="#3b5998" size={35} />
            </li>
            <li>
              <RiGithubFill size={35} />
            </li>
          </ul>
        </SocialMediaGroup>
      </Content>
    </Container>
  );
};

export default Login;
