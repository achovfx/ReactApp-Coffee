import React from 'react';
import Header from './Components/Header/Header';
import Group from './Components/Group/Group';
import BestSells from './Components/BestSells/BestSells';
import Poster from './Components/Poster/Poster';
import Fav from './Components/Fav/Fav';
import Comments from './Components/Comments/Comments';
import Footer from './Components/Footer/Footer';
import "./App.css";

export default function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Group />
      <BestSells />
      <Poster />
      <Fav />
      <Comments />
      <Footer />
    </div>
  )
};