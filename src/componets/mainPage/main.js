import React from 'react';
import Header from './header';
import Slider from './slider';
import Categories from './categories';
import NewPosts from './newPosts';
import SliderHeader from './headerSlider';

function Main() {
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <Slider />
      <Categories />
      <NewPosts />
    </div>
  );
}

export default Main;
