import React from 'react';
import { 
  Container,
  TextNumber,
  ButtonSorteio,
  Wrapper,
  SorteioContainer,
  NumberContainer
} from './styles';
import CardsComponent from '../Cards';

 class Sorteio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true,
      empresas: [
        {
          name: 'Ambev',
          Cod: 'ABEV3',
          number: 1
        },
        {
          name: 'Weg',
          Cod: 'WEGE3',
          number: 2
        },
        {
          name: 'Engie',
          Cod: 'EGIE3',
          number: 3
        },
        {
          name: 'Itau',
          Cod: 'ITUB3',
          number: 4
        },
        {
          name: 'Itaúsa',
          Cod: 'ITSA45',
          number: 5
        },
        {
          name: 'Fleury',
          Cod: 'FLRY3',
          number: 6
        }
      ]
    };

    
    
    this.goodLuck = this.goodLuck.bind(this);
    
  }
  
  
  goodLuck() {
    const min = this.state.empresas[0].number;
    const max = this.state.empresas[this.state.empresas.length - 1].number;
    let total_sortear = 6;
    let empresas_sorteadas = [];
    let cont_sorteados = 0;
    while(cont_sorteados < total_sortear){

      const x = Math.floor(Math.random() * (max - min + 1) + min);
      const sorteada = this.state.empresas.find( emp => emp.number === x );
      // verificar se elemento já foi sorteado
      if(!empresas_sorteadas.includes(sorteada)){
        empresas_sorteadas.push(sorteada);
        cont_sorteados++;
        }
      }
      console.log('empresa', empresas_sorteadas)
      console.log('empresa', empresas_sorteadas[0])
      console.log('empresa', empresas_sorteadas[0].name)
    }
    

  
  render() {
    return (
      <Container>
        <Wrapper>
          <NumberContainer>
            {this.empresas_sorteadas ? 
            <NumberContainer>
              <CardsComponent 
              title={this.empresas_sorteadas[0].name}
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
            </NumberContainer> : 
            <div></div>
            }
            
            {/* <TextNumber>{this.}</TextNumber>KU */}
          </NumberContainer>
          <SorteioContainer>
            <ButtonSorteio onClick={this.goodLuck}>
            {this.state.isToggleOn ? 'Boa sorte' : 'De novo?'}
            </ButtonSorteio>
          </SorteioContainer>

        </Wrapper>
       
      </Container>
    );
  }
}

export default Sorteio;