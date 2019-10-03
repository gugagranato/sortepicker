import React from 'react';

import PropTypes from 'prop-types'

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

function CardsComponent({cod, info, img}) {
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

CardsComponent.propTypes = {
  cod: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default CardsComponent;