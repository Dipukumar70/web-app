import React from 'react';
import DarkVariantExample from './Carousel';
import BasicExample from './Cards';
import AppFooter from './Footer';

const Home = () => {
  return (
    <div>
      <section>
        <DarkVariantExample />
      </section>
      <section style={{ margin: '1.5rem' }}>
        <BasicExample />
      </section>
      <section>
        <AppFooter />
      </section>
    </div>
  );
};

export default Home;
