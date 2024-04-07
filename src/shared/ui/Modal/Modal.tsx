import React, { FC, ReactNode } from 'react';
import close from './close.png';
import styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
  setVisible: (visible: boolean) => void;
}

const Modal: FC<ModalProps> = ({ visible, children, setVisible }) => {
  const handleOnClose = () => {
    setVisible(false);
  };

  const handleOnClickModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleOnClose();
    }
  };

  return (
    <>
      {visible && (
        <div className={styles.modal} onClick={handleOnClickModal}>
          <div className={styles.modalContent}>
            {children}
            <button className={styles.closeButton} onClick={handleOnClose}>
              <img src={close} alt="close" className={styles.img} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
