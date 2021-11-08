import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: 2px solid #333333;

  & + div {
    margin-top: 16px;
  }

  input {
    width: 100%;
    background: transparent;
    //flex: 1;
    border: 0;

    height: 55px;
    background: transparent;
    padding: 16px;

    line-height: 1.2;

    &::placeholder {
      background: transparent;
      color: #333333;

      & + ::hover {
        background: transparent;
      }
    }
  }

  svg {
    color: #333333;
    margin-right: 8px;
  }
`;
