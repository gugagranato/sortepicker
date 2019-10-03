import React,  { useEffect }  from 'react';
import companiesService from '../../Services/api/companiesService'
import abev from '../../assets/global/images/abev.png'
import wege from '../../assets/global/images/wege.png'
import itub from '../../assets/global/images/itub.png'
import itsa from '../../assets/global/images/itsa.png'
import flry from '../../assets/global/images/fleury.png'
import egie from '../../assets/global/images/egie.png'

import { 
  Container,
  ButtonSorteio,
  Wrapper,
  SorteioContainer,
  NumberContainer
} from './styles';
import CardsComponent from '../Cards';

export default function Sorteio() {

  const handleCompanies = async () => {
    try {
      const { data } = await companiesService.getCompanies();
      if(!data) {
        alert('error')
      } else {
        const min = data[0].number;
        const max = data[data.length - 1].number;
        let total_sortear = 6;
        let empresas_sorteadas = [];
        let cont_sorteados = 0;
        while(cont_sorteados < total_sortear){

          const x = Math.floor(Math.random() * (max - min + 1) + min);
          const sorteada = data.find( emp => emp.number === x );
          // verificar se elemento já foi sorteado
          if(!empresas_sorteadas.includes(sorteada)){
            empresas_sorteadas.push(sorteada);
            cont_sorteados++;
            }
          }
      }
    } catch (error) {
      console.log('error', error)
    }
  }
    return (
      <Container>
        <Wrapper>
          <NumberContainer>
            <CardsComponent 
              title="Ambev"
              cod="ABEV3"
              info="Empresa de bebidas"
              img={abev}
            />
            <CardsComponent 
              title="Weg"
              cod="WEGE3"
              info="Empresa de motores elétricos"
              img={wege}
            />
            <CardsComponent 
              title="Fleury"
              cod="FLRY3"
              info="Empresa hospitalar"
              img={flry}
            />
            <CardsComponent 
              title="Engie"
              cod="EGIE3"
              info="Empresa de energia elétrica"
              img={egie}
            />
            <CardsComponent 
              title="Itaú"
              cod="ITUB3"
              info="Empresa do setor bancário"
              img={itub}
            />
            <CardsComponent 
              title="Itaúsa"
              cod="ITSA4"
              info="Holding de empresas"
              img={itsa}
            />
          </NumberContainer>
          <SorteioContainer>
            <ButtonSorteio onClick={handleCompanies}>
              <p>Boa sorte!</p>
            </ButtonSorteio>
          </SorteioContainer>

        </Wrapper>
       
      </Container>
    );
  }
