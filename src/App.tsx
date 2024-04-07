import React, { useState } from 'react';
import './App.css';
import Layout from './widgets/Layout';
import { BrowserRouter } from 'react-router-dom';
import Modal from './shared/ui/Modal';
import AddToCartBtn from './features/AddToCartBtn';
import ProductCard from './widgets/ProductCard';
import img from './widgets/ProductCard/1.png';

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
            price={1000}
            img={img}
            name={'Lord 2024'}
            description={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!'
            }
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
