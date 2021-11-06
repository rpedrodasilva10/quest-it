import { shade } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: #232129;
  height: 56px;
  border-radius: 25px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#232129')};
  }
`;
