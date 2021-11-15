import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: 3px solid #969e9e;

  & + div {
    margin-top: 16px;
  }

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  input,
  textarea {
    width: 100%;
    background: transparent;
    border: 0;

    height: 55px;
    background: transparent;
    padding: 16px;

    line-height: 1.2;

    &::placeholder {
      background: transparent;
      color: #969e9e;

      & + ::hover {
        background: transparent;
      }
    }
  }

  svg {
    color: #969e9e;
    margin-right: 8px;
  }
  span {
    width: 148px;
  }

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #a64bf4;

      svg {
        color: #a64bf4;
      }
    `}

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;

      span {
        font-size: 12px;
        color: #c53030;
      }

      svg {
        color: #c53030;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #a64bf4;
    `}
`;
