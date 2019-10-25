
// import { Container } from './styles';

import React, { Component } from 'react';

// import { Container } from './styles';

export default class Sugestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomes: ['Guga'],
      newName: ''
    }
  }

  mude = n => {
    this.setState({
      newName: n.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      nomes: [...this.state.nomes, this.state.newName],
      newName: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.nomes.map(nome => <li key={nome}>{nome}</li> )}
        </ul>
        <input type='text' onChange={this.mude} value={this.state.newName}/>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
