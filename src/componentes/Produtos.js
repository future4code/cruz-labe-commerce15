import React from "react";
import styled from "styled-components";
import ImagemProduto from "./ImagemProduto";

const ProdutosContainer = styled.div``;

const ProdutosInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  & > * {
    padding: 0;
    margin: 0;
  }
`;
const ProdutosImagens = styled.div`
    display: grid;
    margin: 30px 25px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 370px 370px;
    grid-gap: 20px;
`;

export default class Produtos extends React.Component {
  state = {
    ordenacao: 'crescente',
  }
  
  handleChangeSelect = (event) => {
    this.setState({ordenacao: event.target.value})
  }

  render() {
    // Quantidade de produtos
    let quantidade = 0;
    let listaProdutos;

    // Seleção do tipo de ordenação a fazer na lista de produtos
    switch(this.state.ordenacao) {
      case 'crescente':
        listaProdutos = this.props.listaProdutos.sort((a, b) => a.valor - b.valor)
        break;
      case 'decrescente':
        listaProdutos = this.props.listaProdutos.sort((a, b) => b.valor - a.valor)
        break;
      default:
        listaProdutos = this.props.listaProdutos.sort((a, b) => a.valor - b.valor)
        break;
    }

    // Renderizando cada produto da lista de produtos para o componente 'ImagemProduto'
     listaProdutos = listaProdutos.map((produto) => {
      quantidade++;
      return (
      <ImagemProduto key={produto.id}
        id={produto.id}
        imagem={produto.imagem}
        nome={produto.nome}
        valor={produto.valor}
        onClickBotao={this.props.onClickBotao}
      />)
      })

    return (
      <ProdutosContainer>
        <ProdutosInfo>
          <p>{`Quantidade de produtos: ${quantidade}`}</p>
          <div>
            <label>{"Ordenação"}</label>
            <select value={this.state.ordenacao} onChange={this.handleChangeSelect}>
              <option value="crescente">{"Crescente"}</option>
              <option value="decrescente">{"Decrescente"}</option>
            </select>
          </div>
        </ProdutosInfo>
        <ProdutosImagens>
          {listaProdutos}
        </ProdutosImagens>
      </ProdutosContainer>
    );
  }
}
