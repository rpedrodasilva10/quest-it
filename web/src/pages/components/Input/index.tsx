import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  register: UseFormRegister<any>;
}
const Input: React.FC<InputProps> = ({ name, register, icon: Icon, ...rest }) => {
  return (
    <Container hasError isFilled isFocused>
      {Icon && <Icon size={20} />}
      <input {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;
