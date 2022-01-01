import styled from 'styled-components';

export const Header = styled.header`
  //padding-top: 8px;
`;

export const HeaderContainer = styled.div`
  padding: 20px;
  width: 100%;

  width: 100%;
  display: flex;
  align-items: center;

  nav {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      line-height: 76px;
      font-weight: 500;
      color: #fff;

      & + a {
        padding-left: 42px;
      }

      transition: color 0.2s;

      :hover {
        color: red;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 225px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;

  border: solid #a49999 0.5px;

  img {
    width: 68px;
    border-radius: 56px;
    border: 3px solid #000;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;

    p {
      margin-left: 16px;
      font-weight: 500;
    }

    a {
      position: absolute;
      margin-top: 54px;
      margin-left: -40px;
      display: flex;
      align-items: center;

      border: 0;
      color: #000;
      width: 68px;
      font-weight: 500;
      text-decoration: none;

      transition: color 0.2s;

      svg {
        margin-right: 2px;
      }
    }
  }

  a:hover {
    color: red;
  }
`;

export const SearchQuestsTitle = styled.section`
  display: flex;
  justify-content: center;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 42px;
  }

  /* span {
    margin-top: 60px;
    position: absolute;
    width: 50%;

    border-bottom: 0.5px solid #fff;
  } */
`;

export const SearchInputContainer = styled.div`
  max-width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: relative;
    left: 28px;
  }

  input {
    border: 0;
    height: 25px;
    width: 50%;
    background-color: #fff;

    border-radius: 35px;

    text-align: center;

    ::-webkit-input-placeholder {
      text-align: center;
      font-weight: 700;
      color: #000;
    }

    :-moz-placeholder {
      text-align: center;
    }
  }
`;

export const QuestsContainer = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 32px;
`;
export const QuestCard = styled.div`
  padding-left: 16px;
  background-color: #fff;
  border: solid #a49999 1px;

  width: 300px;
  height: 225px;
  border-radius: 10px;

  p {
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
`;

export const QuestCardProfileContainer = styled.div`
  width: 225px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;

  img {
    width: 68px;
    border-radius: 56px;
    border: 3px solid #000;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 16px;
      font-size: 24px;
    }
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: red;

  margin-top: -20px;
  margin-left: 40px;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;

    & + svg {
      margin-left: 8px;
    }
  }
`;

export const CardTextContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  p {
    color: #969e9e;
    font-size: 16px;
    line-height: 0;
  }

  strong {
    margin-left: 8px;
    line-height: 14px;
  }
  a {
    margin-left: 42px;
    transition: color 0.2s;
    &:hover {
      color: red;
    }
  }
`;
