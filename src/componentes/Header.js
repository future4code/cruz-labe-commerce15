import React from 'react'
import styled from 'styled-components'

import Logo from './../img/logo.png'

const HeaderContainer = styled.div`
    display: flex;
    text-align: left;
    padding-left: 90px;
    padding-top: 10px;

    img {
        width: 120px;
    }
`

export default class Header extends React.Component {

    render() {

        return (
            <HeaderContainer>
                <img src={Logo} />
            </HeaderContainer>
        )
    }
    
}