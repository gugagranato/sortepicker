import React from 'react';

import {
   Container,
   UpperContent,
   Title, 
   Image
} from './styles'

import img from '../../assets/global/images/logo.png'

const Content = () => (
<Container>
   <UpperContent>
       <Title>
         Vivemos batendo os analistas financeiros apenas rodando uma roleta
      </Title>
      <Image src={img}/>
   </UpperContent>
</Container>

)

export default Content;