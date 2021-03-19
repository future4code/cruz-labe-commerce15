import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    height: 80px;
`

export default class Footer extends React.Component {

    render() {

        return (
            <FooterContainer>
                <p>Copyright © Todos os direitos reservados. 2021</p>
            </FooterContainer>
        )
    }
}