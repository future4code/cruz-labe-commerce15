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
    state = {
        valorMinimo: 1,
        valorMaximo: 1000,
        nomeProduto: '',
    }

    onChangeProduto = (event) => {
        this.setState({nomeProduto: event.target.value})

    }

    onChangeValorMinimo = (event) => {
        this.setState({valorMinimo:event.target.value});

    }

    onChangeValorMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    componentDidUpdate() {
        console.log("nada");
    }
    render() {
        
        return (
            <FiltroContainer>
                <h3>{"Filtros"}</h3>
                <label>{"Valor minimo:"}</label>
                <input 
                    type="number"
                    value={this.state.valorMinimo}
                    onChange={this.onChangeValorMinimo}
                />
                <label>{"Valor maximo:"}</label>
                <input 
                    type="number"
                    value={this.state.valorMaximo}
                    onChange={this.onchangeValorMaximo}
    v            />
                <label>{"Busca por nome:"}</label>
                <input 
                    type="text"
                    value={this.state.nomeProduto}
                    onChange={this.onChangeProduto}
                />
            </FiltroContainer>
        )
    }
}