import React, { useState } from 'react';
import Layout from './widgets/Layout';
import { BrowserRouter } from 'react-router-dom';
import Modal from './shared/ui/Modal';
import AddToCartBtn from './features/AddToCartBtn';
import ProductCard from './widgets/ProductCard';
import ProductDetails from './widgets/ProductDetails';
import { PRODUCT_1 } from './app/constants/temp';
import CartItem from './widgets/CartItem';

function App() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const handleOnClickOpenModal = () => {
    setVisibleModal(true);
  };

  return (
    <BrowserRouter>
      <Layout>
        <div>
          <button type="button" onClick={handleOnClickOpenModal}>
            Open modal
          </button>
        </div>

        <div>
          <AddToCartBtn counter={counter} setCounter={setCounter} />
        </div>

        <div>
          <ProductCard
            price={PRODUCT_1.price}
            img={PRODUCT_1.img}
            name={PRODUCT_1.name}
            description={PRODUCT_1.description}
          />
        </div>

        <div>
          <ProductDetails
            price={PRODUCT_1.price}
            category={PRODUCT_1.category}
            img={PRODUCT_1.img}
            name={PRODUCT_1.name}
            description={PRODUCT_1.description}
          />
        </div>

        <div>
          <CartItem
            price={PRODUCT_1.price}
            img={PRODUCT_1.img}
            name={PRODUCT_1.name}
            counter={counter}
            setCounter={setCounter}
          />
        </div>

        <Modal visible={visibleModal} setVisible={setVisibleModal}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur
          repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!
        </Modal>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
