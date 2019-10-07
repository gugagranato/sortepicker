import React from 'react';
import { navigate } from 'hookrouter'
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
          <TextLink onClick={() => navigate('/idea')}>Ideia</TextLink>
          <TextLink onClick={() => navigate('/rentability')}>Rentabilidade</TextLink>
          <TextLink onClick={() => navigate('/sugestion')}>Sugestão</TextLink>
        </InfoContainer>
       </Wrapper>
     </Container>
   );
 }


export default Header