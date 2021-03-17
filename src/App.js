import React from "react";
import "./App.css";
import styled from "styled-components";
import Filtro from "./componentes/Filtro";
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";

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
`;

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    align-items: flex-start;

    & > input {
        margin-bottom: 10px;
    }
`

export default class App extends React.Component {
  state = {
    produtos: [
      {
        nome: "produto1",
        valor: 10.0,
        imagem: "https://picsum.photos/200/200?a=1",
      },
      {
        nome: "produto2",
        valor: 20.0,
        imagem: "https://picsum.photos/200/200?a=2",
      },
      {
        nome: "produto3",
        valor: 30.0,
        imagem: "https://picsum.photos/200/200?a=3",
      },
      {
        nome: "produto4",
        valor: 40.0,
        imagem: "https://picsum.photos/200/200?a=4",
      },
      {
        nome: "produto5",
        valor: 50.0,
        imagem: "https://picsum.photos/200/200?a=5",
      },
      {
        nome: "produto6",
        valor: 100.0,
        imagem: "https://picsum.photos/200/200?a=6",
      },
    ],
    valorMinimo: 0,
    valorMaximo: 1000,
    nomeProduto: "",
  };

  onChangeProduto = (event) => {
    this.setState({ nomeProduto: event.target.value });
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  render() {
    let listaFiltrada = this.state.produtos.filter((produtos) => {
      if(produtos.valor >= this.state.valorMinimo && produtos.valor <= this.state.valorMaximo) {
        if(produtos.nome.includes(this.state.nomeProduto)) {
          return true;
        }
      }
    })
    return (
      <div className="App">
        <Container>
          <FiltroContainer>
            <h3>{"Filtros"}</h3>
            <label>{"Valor minimo:"}</label>
            <input
              type="number"
              value={this.state.valorMinimo}
              onChange={this.onChangeValorMinimo}
            />
            <label>{"Valor maximo:"}</label>
            <input
              type="number"
              value={this.state.valorMaximo}
              onChange={this.onChangeValorMaximo}
            />
            <label>{"Busca por nome:"}</label>
            <input
              type="text"
              value={this.state.nomeProduto}
              onChange={this.onChangeProduto}
            />
          </FiltroContainer>
          <Produtos listaProdutos={listaFiltrada} />
          <Carrinho></Carrinho>
        </Container>
      </div>
    );
  }
}
