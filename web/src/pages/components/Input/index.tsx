import React, { FormEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  errorIcon?: React.ComponentType<IconBaseProps>;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({ register, error, errorIcon: ErrorIcon, icon: Icon, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { onChange: registerOnChange } = { ...register };

  const handleOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    registerOnChange(e);
    setIsFilled(!!e.currentTarget.value);
  }, []);

  const handleOnBlur = useCallback((e: FormEvent<HTMLInputElement>) => {
    setIsFocused(false);
  }, []);

  const handleOnFocus = useCallback((e: FormEvent<HTMLInputElement>) => {
    setIsFocused(true);
  }, []);

  let CustomIcon = Icon || ErrorIcon;

  CustomIcon = (!error ? Icon && Icon : ErrorIcon && ErrorIcon) || Icon;

  return (
    <Container hasError={!!error} isFilled={isFilled} isFocused={isFocused}>
      {CustomIcon && <CustomIcon size={25} />}

      <input {...register} {...rest} onBlur={handleOnBlur} onFocus={handleOnFocus} onChange={handleOnChange} />
      {<span>{error?.message}</span>}
    </Container>
  );
};

export default Input;
