import React, { Component } from 'react';

import Casa from '../casa';
import { Random, TipoJogador, Casas, TemCampeao } from '../../helpers/jogador.helper';

class Tabuleiro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            casas: Casas,
            jogadorAtual: Random()
        };

        this.proximoJogado.bind(this);
    }

    casaClick = (casa) => {
        let casas = this.state.casas;

        if (isNaN(casa)) {
            return this.setState({ erro: true });
        }

        casas[casa - 1] = this.state.jogadorAtual;

        TemCampeao(casas);

        let jogadorAtual = this.proximoJogado();

        this.setState({
            casas: casas, jogadorAtual: jogadorAtual
        });
    }

    proximoJogado() {
        return this.state.jogadorAtual === TipoJogador.X ? TipoJogador.O : TipoJogador.X;
    }

    render() {
        return (
            <div className="tabuleiro">

                <div className="linha">
                    {this.state.casas.slice(0, 3).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} key={index} />)}
                </div>
                <div className="linha">
                    {this.state.casas.slice(3, 6).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} key={index} />)}
                </div>
                <div className="linha">
                    {this.state.casas.slice(6, 9).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} key={index} />)}
                </div>

                <div className="jogador-atual">Jogador atual: <b>{this.state.jogadorAtual}</b></div>
                {this.state.campeao && <div className="jogador-campeao">Jogador campeão: <b>{this.state.jogadorAtual}</b></div>}
            </div>
        )
    }
}

export default Tabuleiro;
