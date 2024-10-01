import React from 'react';
import { Button } from './Button.style';

interface ButtonComponentProps {
  textButton?: string;
  icon?: string | React.ReactNode;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  textButton,
  icon,
  className = '',
}) => {
  return (
    <Button className={className}>
      {typeof icon === 'string' ? (
        <img src={icon} alt="icon" className="icon" />
      ) : (
        icon
      )}
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
