import React from 'react'
import styled from 'styled-components'

import carrinho2 from './../img/carrinho2.svg'

const PopupCarrinho = styled.div`
    padding-left: 130px;
`

export default class AbrirCarrinho extends React.Component {

    render() {

        return (
            <PopupCarrinho>
                <img 
                    src={carrinho2} 
                    alt={"imagem decorativa do carrinho de compras"}
                />
            </PopupCarrinho>
        )
    }
}