import React from 'react';
import Header from '../../Components/Header';
import Sorteio from '../../Components/Sorteio';
import Footer from '../../Components/Footer';

import { Container } from './styles';

export default function SortePicker() {
  return (
    <Container>
      <Header />
      <Sorteio />
      <Footer />
    </Container>
  );
}
