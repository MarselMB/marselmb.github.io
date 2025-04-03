import React, { FC } from 'react';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  handleOnClick: () => void;
  img: string;
}

const IconButton: FC<IconButtonProps> = ({ handleOnClick, img }) => {
  return (
    <button className={styles.iconButton} onClick={handleOnClick}>
      <img src={img} alt="close" className={styles.img} />
    </button>
  );
};

export default IconButton;
