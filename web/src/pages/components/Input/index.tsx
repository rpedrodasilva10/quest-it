import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  register: UseFormRegisterReturn;
  registerOptions?: {
    required: string;
  };
}
const Input: React.FC<InputProps> = ({ register, icon: Icon, ...rest }) => {
  return (
    <Container hasError isFilled isFocused>
      {Icon && <Icon size={20} />}
      <input {...register} {...rest} />
    </Container>
  );
};

export default Input;
