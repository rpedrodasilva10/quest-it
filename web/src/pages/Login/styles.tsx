import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1``;

export const Content = styled.div`
  margin: 56px auto;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #5e615f3e;
  border: solid #fff 1px;

  border-radius: 10px;

  h3 {
    margin: auto;
    margin-top: 28px;
  }

  form {
    margin: 24px;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;

    li {
      display: flex;

      & + li {
        margin-left: 20px;
      }
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInputLabel = styled.label`
  font-size: 20px;
`;
