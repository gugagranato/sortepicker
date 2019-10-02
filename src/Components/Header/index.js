import React from 'react';
import logo from '../../assets/global/images/logo1.png'
import { 
  Container,
  Wrapper,
  LogoContainer,
  LogoImage,
  InfoContainer,
  TextLink,
  Logo
} from './styles';

 function Header() {
   return (
     <Container>
       <Wrapper>
        <LogoContainer>
          <LogoImage>
            <Logo src={logo}/>
          </LogoImage>
        </LogoContainer>
        <InfoContainer>
          <TextLink>Ideia</TextLink>
          <TextLink>Rentabilidade</TextLink>
          <TextLink>Sugestão</TextLink>
        </InfoContainer>
       </Wrapper>
     </Container>
   );
 }


export default Header