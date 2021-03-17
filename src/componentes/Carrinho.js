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
    return (
      <ContainerCarrinho>
        <h3>{"Carrinho"}</h3>
        <ProdutoCarrinho
            quantidade="2"
            nome="Produto4"
        />
        <ProdutoCarrinho
            quantidade="2"
            nome="Produto4"
        />

        <p>{"Valor total: R$70,00"}</p>
      </ContainerCarrinho>
    );
  }
}
