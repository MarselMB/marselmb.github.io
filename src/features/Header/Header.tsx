import React, { FC } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div>Navigation...</div>
    </header>
  );
};

export default Header;
