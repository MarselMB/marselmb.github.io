import React, { FC, ReactNode } from 'react';
import close from './close.png';
import styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, children }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeButton}>
          <img src={close} alt="close" className={styles.img} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
