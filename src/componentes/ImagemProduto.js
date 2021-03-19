import React from "react";
import styled from "styled-components";

import LogoCarrinho from './../img/carrinho.svg'

const ImagemContainer = styled.div`
    display: flex;
    flex-direction: column;
    //border-right: 1px solid black;
    //border-bottom: 1px solid black;
    height: 350px;
    font-weight: 300;
    overflow:hidden;
   
   &:hover{
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 35%);
    transition: box-shadow .3s ease-in-out;

   }


    & > img {
      max-width:100%;
      --moz-transition:all 0.3s;
      --webkit-transition: all 0.3s;
      transition:all 0.3s;
    }

    &> img:hover{
    --moz-transform: scale(1.1);
    --webkit-transfomr: scale(1.1);
    transform:scale(1.1);
    }

    & > div {
      display: flex;
      flex-direction:column;
      //justify-content: space-between;
      font-size: 14px;
      text-transform: uppercase;
      padding:0 10px;
      align-items:flex-start;
      margin-bottom:20px;

      
      & > p{
        padding:0;
        margin:0;
        padding-top:10px;

        &:first-of-type{
          font-size:20px;
          font-weight:normal;
        }
      }
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
        <p>R$ {this.props.valor}</p>
        <p>{this.props.nome}</p>
        </div>
       <button onClick={() => {this.props.onClickBotao(this.props.id, this.props.nome, this.props.valor)}}>{"Adicionar ao carrinho"}</button>
      </ImagemContainer>
    );
  }
}
