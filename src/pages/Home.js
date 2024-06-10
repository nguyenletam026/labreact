import React from 'react';
import Intro from '../components/Intro/Intro';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

function Home(props) {
  return (
    <div >
      <Intro/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Home;