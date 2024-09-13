import React from 'react';
import Button from './Button.style';

interface ButtonComponentProps {
  textButton: string;
  // styleButton: React.CSSProperties;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ textButton, className = '' }) => {
  return (
    <Button
      className={className}
    >
      {textButton}
    </Button>
  )
}

export default ButtonComponent;