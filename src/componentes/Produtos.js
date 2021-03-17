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
  
  
  render() {
    let quantidade = 0;
    let listaProdutos = this.props.listaProdutos.map((produto) => {
      quantidade++;
      return (
      <ImagemProduto 
        imagem={produto.imagem}
        nome={produto.nome}
        valor={produto.valor} 
      />)
    })
    return (
      <ProdutosContainer>
        <ProdutosInfo>
          <p>{`Quantidade de produtos: ${quantidade}`}</p>
          <div>
            <label>{"Ordenação"}</label>
            <select>
              <option>{"Crescente"}</option>
              <option>{"Decrescente"}</option>
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
