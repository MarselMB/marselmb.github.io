import React, { FC, ReactNode, useEffect, useState } from 'react';
import close from './close.png';
import styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, children }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    setIsShow(visible);
  }, [visible]);

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnClickModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleOnClose();
    }
  };

  return (
    <>
      {isShow && (
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
