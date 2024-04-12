import React, { FC } from 'react';
import logo from './logoBazaar.svg';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo: FC = () => (
  <Link to="/" className={styles.logo}>
    <img src={logo} alt="logo" />
  </Link>
);

export default Logo;
