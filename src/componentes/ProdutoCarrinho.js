import React from "react";
import styled from "styled-components";

const ContainerProduto = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    margin: 3px 0;

    & > * {
        margin: 0;
        padding: 0;
    }

    & > button {
        width: 100px;
        height: 25px;
    }
`

export default class ProdutoCarrinho extends React.Component {
  render() {
    return (
        <ContainerProduto>
            <p>{`${this.props.quantidade}x`}</p>
            <p>{this.props.nome}</p>
            <button onClick={() => this.props.remover(this.props.id)}>{"Remover"}</button>
        </ContainerProduto>
    );
  }
}
