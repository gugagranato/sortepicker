import React,  { useEffect }  from 'react';
import companiesService from '../../Services/api/companiesService'
import axios from 'axios'

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
      console.log('data', data[0])
      if(!data) {
        console.log('Erro')
        
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
      console.log('empresa', empresas_sorteadas[0].name)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

    return (
      <Container>
        <Wrapper>
          <NumberContainer>
            <NumberContainer>
            <CardsComponent 
              title="Ambev"
              cod="ABEV3"
              info="Empresa de bebidas"
            />
            <CardsComponent 
              title="Weg"
              cod="WEGE3"
              info="Empresa de motores elétricos"
            />
            <CardsComponent 
              title="Fleury"
              cod="FLRY3"
              info="Empresa hospitalar"
            />
            <CardsComponent 
              title="Engie"
              cod="EGIE3"
              info="Empresa de energia elétrica"
            />
            <CardsComponent 
              title="Itaú"
              cod="ITUB3"
              info="Empresa do setor bancário"
            />
            <CardsComponent 
              title="Itaúsa"
              cod="ITSA4"
              info="Holding de empresas"
            />
            </NumberContainer>
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
