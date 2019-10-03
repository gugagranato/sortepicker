import React from 'react';

import { 
  Container, 
  Wrapper, 
  TitleEnterprise, 
  ImageContainer, 
  Image,
  ContentContainer,
  FooterContainer,
  FooterCard,
} from './styles';

export default function CardsComponent({title, cod, info, img}) {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={img}/>
        </ImageContainer>
        <ContentContainer>
          <TitleEnterprise>
            {cod}
          </TitleEnterprise>
          <FooterContainer>
            <FooterCard>{info}</FooterCard>
          </FooterContainer>

        </ContentContainer>
      </Wrapper>
    </Container>
  );
}
