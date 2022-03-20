import React from 'react';
import Header from './header';
import Slider from './slider';
import Categories from './categories';

function Main() {
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <Slider />
      <Categories />
    </div>
  );
}

export default Main;
