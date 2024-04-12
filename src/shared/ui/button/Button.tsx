import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  handleOnClick: () => void;
  title: string;
}

const Button: FC<ButtonProps> = ({ handleOnClick, title }) => {
  return (
    <button className={styles.button} onClick={handleOnClick}>
      {title}
    </button>
  );
};

export default Button;
