import React, { FC } from 'react';
import IconButton from '../../shared/ui/IconButton';
import plus from './plus.svg';
import minus from './minus.svg';
import styles from './AddToCartBtn.module.scss';
import Button from '../../shared/ui/Button';

interface AddToCartBtnProps {
  counter: number;
  setCounter: (counter: number) => void;
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ counter, setCounter }) => {
  const handleOnclickPlus = () => {
    setCounter(counter + 1);
  };

  const handleOnclickMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.addToCartBtn}>
      {!counter && <Button title="В корзину" handleOnClick={handleOnclickPlus} />}

      {!!counter && (
        <div className={styles.counterBtn}>
          <IconButton pathToImg={plus} handleOnClick={handleOnclickPlus} />
          <h5 className={styles.counterText}>{counter}</h5>
          <IconButton pathToImg={minus} handleOnClick={handleOnclickMinus} />
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
