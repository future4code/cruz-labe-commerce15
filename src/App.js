import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from './componentes/Header'
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";
import AbrirCarrinho from './componentes/AbrirCarrinho'

import camisa1 from './img/camiseta1.jpeg'
import camisa2 from './img/camiseta2.jpg'
import camisa3 from './img/camiseta3.jpg'
import camisa4 from './img/camiseta4.png'
import camisa5 from './img/camiseta5.jpg'
import camisa6 from './img/camiseta6.jpg'
import camisa7 from './img/camiseta7.jpeg'
import camisa8 from './img/camiseta8.jpg'
import camisa9 from './img/camiseta9.jpg'
import camisa10 from './img/camiseta10.jpg'
import camisa11 from './img/camiseta11.jpg'
import camisa12 from './img/camiseta12.jpg'


import LogoBusca from './img/buscar.svg'

const Container = styled.div`
  height: 480px;
  background: #fff;
  display: grid;
  padding: 20px;
  font-size: 1.2rem;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 10px;

  & > div {
    /* border-left: 1px solid black; */
  }
`;

const BuscaNomeProduto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 160px;

  img {
    width: 40px;
    padding-right: 10px;
  }

  input {
    width: 700px;
    height: 30px;
    border: none;
    border-bottom: 2px solid grey;
    font-size: 1.2rem;
    
    ::placeholder {
      font-size: 18px;
    }
  }
`

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    align-items: flex-start;
    font-weight: 300;

    & > h3 {
      color: #00000090;
    }

    & > input {
        margin-bottom: 10px;
    }
`

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "camisa the aliens",
        valor: 120.0,
        imagem: camisa1,
      },
      {
        id: 2,
        nome: "camisa astroball",
        valor: 115.0,
        imagem: camisa2,
      },
      {
        id: 3,
        nome: "camisa nasa wars",
        valor: 90.0,
        imagem: camisa3,
      },
      {
        id: 4,
        nome: "camisa alien",
        valor: 110.0,
        imagem: camisa4,
      },
      {
        id: 5,
        nome: "camisa star wars",
        valor: 100.0,
        imagem: camisa5,
      },
      {
        id: 6,
        nome: "camisa baby vader",
        valor: 115.0,
        imagem: camisa6,
      },
      {
        id: 7,
        nome: "camisa starship",
        valor: 49.0,
        imagem: camisa7,
      },
      {
        id: 8,
        nome: "camisa planetas",
        valor: 80.0,
        imagem: camisa8,
      },
      {
        id: 9,
        nome: "camisa phasma",
        valor: 120.0,
        imagem: camisa9,
      },
      {
        id: 10,
        nome: "camisa skatenauta",
        valor: 80.0,
        imagem: camisa10,
      },
      {
        id: 11,
        nome: "camisa alien-sense",
        valor: 50.0,
        imagem: camisa11,
      },
      {
        id: 12,
        nome: "camisa galáxia",
        valor: 65.0,
        imagem: camisa12,
      },
    ],
    valorMinimo: 0,
    valorMaximo: 500,
    nomeProduto: "",
    produtosCarrinho: [],
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

  onClickProdutoCarrinho = (novoId, novoNome, novoValor) => {
    let encontrado = false;

    // Atualização do Produto
    if(!encontrado) {
      const novoCarrinho = this.state.produtosCarrinho.map((produto) => {
        if(produto.id === novoId) {
          let produtoAtualizado;
          produtoAtualizado = {
            ...produto,
            quantidade: produto.quantidade + 1,
          }
          encontrado = true;
          return produtoAtualizado;
        }
        else {
          return produto;
        }
      })
      if(encontrado) {
        this.setState({produtosCarrinho: novoCarrinho})
      }
    }

    // Adição de um novo produto
    if(!encontrado) {
      const novoProduto = {
        id: novoId,
        nome: novoNome,
        valor: novoValor,
        quantidade: 1,
      }
      this.setState({produtosCarrinho: [...this.state.produtosCarrinho, novoProduto]})
    }
  }

  decrementarProduto = (id) => {
    const novoCarrinho = this.state.produtosCarrinho.map((produto) => {
      if(produto.id === id) {
        const novoProduto = {
          ...produto,
          quantidade: produto.quantidade - 1,
        }
        return novoProduto
      } else {
        return produto;
      }
    })

    this.setState({produtosCarrinho: novoCarrinho})
  }

  removerProduto = (id) => {
    const novoCarrinho = this.state.produtosCarrinho.filter((produto) => {
      return !(produto.id === id);
    })  

    this.setState({produtosCarrinho: novoCarrinho});
  }

  onClickRemoverProduto = (id) => {
    let quantidade;

    this.state.produtosCarrinho.forEach((produto) => {
      if(produto.id === id) {
        quantidade = produto.quantidade;
      }
    })

    if(quantidade > 1) {
      this.decrementarProduto(id)
    }
    else {
      this.removerProduto(id)
    }
  }

  render() {
    // Filtro dos valores minimo, máximo e do nome
    let listaFiltrada = this.state.produtos.filter((produtos) => {
      if(produtos.valor >= this.state.valorMinimo && produtos.valor <= this.state.valorMaximo) {
        if(produtos.nome.includes(this.state.nomeProduto)) {
          return true;
        }
      }
      return false
    })

    return (
      <div className="App">
        <Header/>
          <BuscaNomeProduto>
            <img src={LogoBusca} />
            <input
              type="text"
              placeholder={'Busca por nome'}
              value={this.state.nomeProduto.toLowerCase()} // aquiiiiiiiiiiiiiiiii
              onChange={this.onChangeProduto}
            />
            <AbrirCarrinho/>
            </BuscaNomeProduto>
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
          </FiltroContainer>
          <Produtos 
            listaProdutos={listaFiltrada}
            onClickBotao={this.onClickProdutoCarrinho} 
          />
          <Carrinho 
            produtosCarrinho={this.state.produtosCarrinho}
            remover={this.onClickRemoverProduto}
          />
        </Container>
      </div>
    );
  }
}
