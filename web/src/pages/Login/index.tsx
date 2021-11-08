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
  name?: string;
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

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data: any) => console.log(data);

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <label htmlFor="name">Name</label>
  //     <input id="name" {...register('name', { required: true, maxLength: 30 })} />
  //     {errors?.name?.type === 'required' && <span>This is required</span>}
  //     {errors?.name?.type === 'maxLength' && <span>Max length exceeded</span>}
  //     <input type="submit" />
  //   </form>
  // );
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
        <h3>Login</h3>
        <form onSubmit={handleSubmit(doLogin)}>
          <Input
            id="email"
            placeholder="Digite seu email"
            icon={RiMailFill}
            register={register('email', {
              required: {
                value: true,
                message: 'Email é obrigatório',
              },
              min: {
                value: 3,
                message: 'Mínimo de três caractéres',
              },
            })}
          />
          {errors.password && <span>{errors?.password?.message}</span>}
          <Input
            placeholder="Digite sua senha"
            icon={RiLock2Fill}
            register={register('password', {
              required: {
                value: true,
                message: 'Senha é obrigatória',
              },
              min: {
                value: 3,
                message: 'Mínimo de três caractéres',
              },
            })}
            type="password"
          ></Input>
          {errors?.email?.type === 'required' && <span>This EMAIL required</span>}
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
