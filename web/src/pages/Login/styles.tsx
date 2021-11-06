import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

  margin-top: 48px;
  border: solid #fff 1px;

  //height: 400px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInputLabel = styled.label`
  font-size: 20px;
`;
