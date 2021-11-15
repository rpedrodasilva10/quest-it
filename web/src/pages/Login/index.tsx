import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLock2Line,
  RiLockUnlockLine,
  RiMailCloseLine,
  RiMailLine
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import api from '../../services/api';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Content, SocialMediaGroup } from './styles';

const loginFormSchema = yup
  .object({
    email: yup.string().email('E-mail inválido!').required('Informe o e-mail!'),
    password: yup.string().min(6, 'Mínimo ${min} caractéres').required('Informe a senha!'),
  })
  .required();

type LoginForm = {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
    resolver: yupResolver(loginFormSchema),
  });

  const doLogin = async ({ email, password }: LoginForm) => {
    try {
      const response = await api.post<AuthData>('/authenticate', {
        email,
        password,
      });

      toast.success('Login realizado com sucesso', {
        autoClose: false
      });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('E-mail e/ou senha inválido(s) 😢');
        } else {
          toast.error('Serviço indisponível no momento!');
        }
      } else {
        toast.error('Ops! Ocorreu um erro, tente novamente mais tarde');
      }
    }
  };

  return (
    <>
      <Container>
        <Content>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(doLogin)}>
            <Input
              id="email"
              placeholder="Digite seu email"
              icon={RiMailLine}
              errorIcon={RiMailCloseLine}
              error={errors.email}
              register={register('email')}
            />

            <Input
              id="password"
              placeholder="Digite sua senha"
              icon={RiLockUnlockLine}
              errorIcon={RiLock2Line}
              register={register('password')}
              error={errors.password}
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
    </>
  );
};

export default Login;
