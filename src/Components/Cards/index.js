import React from 'react';

import { Container, Wrapper, TitleEnterprise } from './styles';

export default function CardsComponent({title, cod, info}) {
  return (
    <Container>
      <Wrapper>
        <TitleEnterprise>
          {title}
        </TitleEnterprise>
        <strong>Código:</strong><p>{cod}</p>
        <footer>{info}</footer>
      </Wrapper>
    </Container>
  );
}
