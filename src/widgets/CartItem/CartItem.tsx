import React, { FC } from 'react';
import AddToCartBtn from '../../features/AddToCartBtn';
import IconButton from '../../shared/ui/IconButton';
import close from '../../app/assets/close.svg';
import styles from './CartItem.module.scss';

interface CartItemProps {
  price: number;
  img: string;
  name: string;
  counter: number;
  setCounter: (counter: number) => void;
}

const CartItem: FC<CartItemProps> = ({ price, img, name, counter, setCounter }) => {
  const handleOnClose = () => {
    setCounter(0);
  };

  return (
    <div className={styles.cartItem}>
      <img src={img} alt="imgProduct" className={styles.img} />

      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.price}>
          {counter ? (
            <>
              {`$${price} x ${counter} = `}
              <span className={styles.total}>{`$${price * counter}`}</span>
            </>
          ) : (
            'Товар не добавлен в корзину'
          )}
        </h5>
        <AddToCartBtn counter={counter} setCounter={setCounter} />
      </div>
      <div className={styles.closeButton}>
        <IconButton img={close} handleOnClick={handleOnClose} />
      </div>
    </div>
  );
};

export default CartItem;
