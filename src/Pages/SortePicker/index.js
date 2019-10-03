import React from 'react';

import '../../assets/styles/reset.css'
import '../../assets/styles/font.css'

import Header from '../../Components/Header';
import Sorteio from '../../Components/Sorteio';
// import Footer from '../../Components/Footer';

import { Container } from './styles';
import Content from '../../Components/Content';

export default function SortePicker() {
  return (
    <Container>
      <Header />
      <Content />
      <Sorteio />
      {/* <Footer /> */}
    </Container>
  );
}
