import React from 'react';
import './App.css';
import Layout from './widgets/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>Test</div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
