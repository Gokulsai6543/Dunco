// Layout.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';

const DuncoLayout: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />\
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default DuncoLayout;
