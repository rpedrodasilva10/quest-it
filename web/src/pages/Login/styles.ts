import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 500px;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin: 56px auto;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border: solid #ffffffe6 1px;

  border-radius: 10px;

  h3 {
    font-size: 32px;
    margin: auto;
    margin-top: 28px;
    color: #000;
  }

  form {
    width: 80%;
    margin: 24px;
    display: flex;
    flex-direction: column;

    a {
      margin-top: 8px;
      display: flex;
      align-self: flex-end;
      width: 160px;
      justify-content: right;
      color: #000;
    }

    button {
      font-size: 16px;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;

      background: -webkit-linear-gradient(right, #00dbde, #fc00ff);
      background: -o-linear-gradient(right, #00dbde, #fc00ff);
      background: -moz-linear-gradient(right, #00dbde, #fc00ff);
      background: linear-gradient(right, #00dbde, #fc00ff);
      top: 0;
      left: -100%;

      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    }
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

export const SocialMediaGroup = styled.div`
  margin: 28px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
