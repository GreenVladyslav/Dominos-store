import React from 'react';

import Sliders from '../components/Slider/Sliders';
import Pizza from './Pizza';

function Main() {
  return (
    <>
      <div className="container">
        <Sliders />
      </div>
      <div style={{ marginTop: '60px' }} />
      <Pizza />
    </>
  );
}

export default Main;
