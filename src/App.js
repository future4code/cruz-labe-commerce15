import React from "react";
import "./App.css";
import styled from "styled-components";
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
        id: 1,
        nome: "produto1",
        valor: 10.0,
        imagem: "https://picsum.photos/200/200?a=1",
      },
      {
        id: 2,
        nome: "produto2",
        valor: 20.0,
        imagem: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 3,
        nome: "produto3",
        valor: 30.0,
        imagem: "https://picsum.photos/200/200?a=3",
      },
      {
        id: 4,
        nome: "produto4",
        valor: 40.0,
        imagem: "https://picsum.photos/200/200?a=4",
      },
      {
        id: 5,
        nome: "produto5",
        valor: 50.0,
        imagem: "https://picsum.photos/200/200?a=5",
      },
      {
        id: 6,
        nome: "produto6",
        valor: 100.0,
        imagem: "https://picsum.photos/200/200?a=6",
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
