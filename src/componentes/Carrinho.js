import React from "react";
import styled from "styled-components";
import ProdutoCarrinho from './ProdutoCarrinho'

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
`

export default class Carrinho extends React.Component {
  render() {
    let valorTotal = 0;
    let produtosCarrinho = this.props.produtosCarrinho.map((produto) => {
      valorTotal += (produto.quantidade * produto.valor);
      return (
        <ProdutoCarrinho 
          id = {produto.id}
          quantidade={produto.quantidade}
          nome={produto.nome}
          remover={this.props.remover}
        />
      )
    })
    return (
      <ContainerCarrinho>
        <h3>{"Carrinho"}</h3>
          {produtosCarrinho}
        <p>{`Valor total: R$${valorTotal},00`}</p>
      </ContainerCarrinho>
    );
  }
}
