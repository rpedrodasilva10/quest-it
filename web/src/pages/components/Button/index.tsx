import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}
const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => (
  <ButtonContainer {...rest}>
    {children}
    {Icon && <Icon size={20} />}
  </ButtonContainer>
);

export default Button;
