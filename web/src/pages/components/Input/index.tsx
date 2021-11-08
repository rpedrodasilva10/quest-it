import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  register: UseFormRegister<any>;
  registerOptions?: {
    required: boolean;
  };
}
const Input: React.FC<InputProps> = ({ name, register, registerOptions, icon: Icon, ...rest }) => {
  return (
    <Container hasError isFilled isFocused>
      {Icon && <Icon size={20} />}
      <input {...register(name, registerOptions)} {...rest} />
    </Container>
  );
};

export default Input;
