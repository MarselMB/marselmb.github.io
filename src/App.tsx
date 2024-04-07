import React, { useState } from 'react';
import './App.css';
import Layout from './widgets/Layout';
import { BrowserRouter } from 'react-router-dom';
import Modal from './shared/ui/Modal';

function App() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

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

        <Modal visible={visibleModal} setVisible={setVisibleModal}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur
          repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!
        </Modal>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
