import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding-top: 8px;
  //  width: 100%;

  //height: 100px;
  border: solid #ffffffe6 1px;
  //  border-radius: 10px;

  /*

  width: 100%;
  display: flex;
  align-itens: center;
  justify-content: center;

  h2 {
    margin-right: 200px;
    width: 150px;
  }

  div {
    width: 100%;
    display: flex;
    align-itens: center;
    justify-content: center;
  }
  */
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  width: 100%;

  width: 100%;
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 400px;

  display: flex;
  align-items: center;

  img {
    width: 68px;
    border-radius: 56px;

    border: 3px solid #fff;
  }

  p {
    margin-left: 16px;
    font-weight: 500;
  }

  a {
    position: absolute;
    margin-top: 54px;
    margin-left: 84px;
    display: flex;
    align-items: center;
    height: 36px;

    border: 0;
    color: #ffffffe6;
    width: 68px;
    font-weight: 500;
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-right: 2px;
    }
  }

  a:hover {
    color: red;
  }
`;
