import React, { FC, ReactNode } from 'react';
import close from '../../../app/assets/close.svg';
import styles from './Modal.module.scss';
import IconButton from '../IconButton';

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
            <div className={styles.closeButton}>
              <IconButton img={close} handleOnClick={handleOnClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
