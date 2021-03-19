import React from "react";
import styled from "styled-components";

import LogoCarrinho from './../img/carrinho.svg'

const ImagemContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: 340px;
    font-weight: 300;
    

    & > img {
      width: 200px;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      padding-bottom: 20px;
      padding-top: 10px;
      font-size: 14px;
      text-transform: uppercase;
    }

    & > button {
      align-self: center;
      margin-right: 10px;
      height:30px;
      border: none;
      border-bottom: 2px solid #008E97;
      font-weight: bold;
      color: #00000080;
      cursor: pointer;
      &:hover {
        border-bottom: #fff;
        background-color: #008E97;
        color: #fff;
      }
    }

`


export default class ImagemProduto extends React.Component {
  render() {
    return (
      <ImagemContainer>
        <img
            src={this.props.imagem}
            alt={this.props.nome}
        />
        <div>
        <p>{this.props.nome}</p>
        <p>R$ {this.props.valor}</p>
        </div>
        <button onClick={() => {this.props.onClickBotao(this.props.id, this.props.nome, this.props.valor)}}>{"Adicionar ao carrinho"}</button>
      </ImagemContainer>
    );
  }
}
