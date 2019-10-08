import React from 'react';

import {
   Container,
   UpperContent,
   Title, 
   Image
} from './styles'

import img from '../../assets/global/images/sorte.png'

const Content = () => (
<Container>
   <UpperContent>
       <Title>
         Vivemos batendo os analistas financeiros apenas rodando uma <strong>roleta</strong>
      </Title>
      <Image src={img}/>
   </UpperContent>
</Container>

)

export default Content;