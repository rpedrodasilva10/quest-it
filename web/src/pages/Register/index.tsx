import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { RiLock2Line, RiLockUnlockLine, RiMailCloseLine, RiMailLine, RiUser2Fill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import api from '../../services/api';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, Content } from './styles';

type RegisterFormData = {
  email: string;
  name: string;
  password: string;
};

const RegisterFormSchema = yup
  .object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().email('E-mail inválido!').required('Informe o e-mail!'),
    // eslint-disable-next-line
    password: yup.string().min(6, 'Mínimo ${min} caractéres').required('Informe a senha!'),
  })
  .required();

const Register: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'onBlur',
    resolver: yupResolver(RegisterFormSchema, {
      abortEarly: false,
    }),
  });

  const signUp = useCallback(
    async ({ email, password, name }: RegisterFormData) => {
      try {
        await api.post('/parents', { email, password, name });
        toast.success('Cadastro realizado com sucesso');

        history.push('/');
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            toast.error('E-mail e/ou senha inválido(s) 😢');
          } else if (error.response?.status === 400) {
            if (error.response.data.message === 'An account already exists with this e-mail')
              toast.error('Já existe uma conta com este e-mail!');
          }
        } else {
          console.error(error);
          toast.error('Ops! Ocorreu um erro, tente novamente mais tarde');
        }
      }
    },
    [history]
  );

  return (
    <>
      <Container>
        <Content>
          <h3>Cadastre-se</h3>
          <form onSubmit={handleSubmit(signUp)}>
            <Input
              id="name"
              placeholder="Digite seu nome"
              icon={RiUser2Fill}
              error={errors.email}
              register={register('name')}
            />
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

            <Button type="submit">Cadastrar</Button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Register;
