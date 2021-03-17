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
    return (
      <ProdutosContainer>
        <ProdutosInfo>
          <p>{`Quantidade de produtos: {"4"}`}</p>
          <div>
            <label>{"Ordenação"}</label>
            <select>
              <option>{"Crescente"}</option>
              <option>{"Decrescente"}</option>
            </select>
          </div>
        </ProdutosInfo>
        <ProdutosImagens>
          <ImagemProduto
            imagem={"https://picsum.photos/200/200?a=4"}
            nome="Produto 4"
            valor="R$10,00"
          />
          <ImagemProduto
            imagem={"https://picsum.photos/200/200?a=1"}
            nome="Produto 2"
            valor="R$10,00"
          />
          <ImagemProduto
            imagem={"https://picsum.photos/200/200?a=3"}
            nome="Produto 3"
            valor="R$10,00"
          />
          <ImagemProduto
            imagem={"https://picsum.photos/200/200?a=5"}
            nome="Produto 5"
            valor="R$10,00"
          />
          <ImagemProduto
            imagem={"https://picsum.photos/200/200?a=6"}
            nome="Produto 6"
            valor="R$10,00"
          />
        </ProdutosImagens>
      </ProdutosContainer>
    );
  }
}
