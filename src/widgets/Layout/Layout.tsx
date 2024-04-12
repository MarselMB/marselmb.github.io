import React, { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import Header from '../../features/Header';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
