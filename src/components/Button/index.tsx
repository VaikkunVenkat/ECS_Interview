import React from 'react';
import { IButtonProps } from './types';
import './styles.css'

const Button: React.FC<IButtonProps> = ({ onClick, className, text }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
