import React, { FC } from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  handleOnClick: () => void;
  pathToImg: string;
}

const IconButton: FC<IconButtonProps> = ({ handleOnClick, pathToImg }) => {
  return (
    <button className={styles.iconButton} onClick={handleOnClick}>
      <img src={pathToImg} alt="close" className={styles.img} />
    </button>
  );
};

export default IconButton;
