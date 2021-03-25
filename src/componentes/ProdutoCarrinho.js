import React from "react";
import styled from "styled-components";

const ContainerProduto = styled.div`
  align-self: stretch;
  display: flex;
  //justify-content: center;
  margin: 12px 0;
  flex-direction: column;
  //border:1px solid black;
  padding-bottom:10px;
  background-color:rgba(0,0,0,0.03);
  
  //align-items:center;
  &:hover{
    box-shadow:0px 0px 2px rgba(0,0,0,0.5);
    transition: box-shadow .2s ease-in-out;
    }
  & > div {
    display: flex;
    //justify-content:space-between;
    padding: 0 20px;
    text-transform:capitalize;
    

    & > p:first-child {
      margin-right: 20px;
      font-weight:normal;
    }
  }

  & > * {
    margin: 0;
    padding: 0;
  }

  & > button {
    width: 70px;
    height: 25px;
    border: none;
    border-bottom: 2px solid #f58220;
    font-weight: bold;
    color: #00000080;
    cursor: pointer;
    align-self: center;
    &:hover {
      border-bottom: #fff;
      background-color: #f58220;
      color: #fff;
    }
  }
`;

export default class ProdutoCarrinho extends React.Component {
  render() {
    return (
      <ContainerProduto>
        <div>
          <p>{`${this.props.quantidade}x`}</p>
          <p>{this.props.nome}</p>
        </div>
        <button onClick={() => this.props.remover(this.props.id)}>
          {"Remover"}
        </button>
      </ContainerProduto>
    );
  }
}
