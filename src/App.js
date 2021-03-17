import React from 'react';
import './App.css';
import styled from 'styled-components'
import Filtro from './componentes/Filtro'
import Produtos from './componentes/Produtos'
import Carrinho from './componentes/Carrinho'

const Container = styled.div`
  height: 480px;
  background: #fff;
  display: grid;
  padding: 20px;

  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 10px;

  & > div {
    border: 1px solid black;
  }
`

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Filtro></Filtro>
          <Produtos></Produtos>
          <Carrinho></Carrinho>  
        </Container>
      </div>
    );
  }
}