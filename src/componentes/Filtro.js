import React from 'react'
import styled from 'styled-components'

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    align-items: flex-start;

    & > input {
        margin-bottom: 10px;
    }
`

export default class Filtro extends React.Component {

    render() {
        return (
            <FiltroContainer>
                <h3>{"Filtros"}</h3>
                <label>{"Valor minimo:"}</label>
                <input />
                <label>{"Valor maximo:"}</label>
                <input />
                <label>{"Busca por nome:"}</label>
                <input />
            </FiltroContainer>
        )
    }
}