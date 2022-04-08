import React from 'react';
import Header from './header';
import Slider from './slider';
import Categories from './categories';
import NewPosts from './newPosts';
import { HeanderTwo } from './elegant/index';

function Main() {
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <Slider />
      {/* <HeanderTwo /> */}
      <Categories />
      <NewPosts />
    </div>
  );
}

export default Main;
