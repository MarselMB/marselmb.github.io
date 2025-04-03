import React, { FC, useState } from 'react';
import AddToCartBtn from '../../features/AddToCartBtn';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  price: number;
  img: string;
  name: string;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({ price, img, name, description }) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={styles.cardProduct}>
      <img src={img} alt="imgProduct" className={styles.img} />

      <div className={styles.textContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.purchaseContent}>
          <h3 className={styles.price}>{`$${price}`}</h3>
          <AddToCartBtn counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
