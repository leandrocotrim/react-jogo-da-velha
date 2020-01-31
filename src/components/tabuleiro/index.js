import React, { Component } from 'react';

import Casa from '../casa';
import { Random, TipoJogador, Casas, TemCampeao } from '../../helpers/jogador.helper';

class Tabuleiro extends Component {

    getDefaultState = () => {
        return {
            casas: Casas(),
            jogadorAtual: Random(),
            campeao: null,
            erro: null,
            trilha: [],
            historico: [Casas()]
        };
    };

    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.proximoJogador.bind(this);
    }

    casaClick = (casa) => {
        const casas = this.state.casas.slice();

        if (this.state.campeao) {
            return;
        }

        if (isNaN(casa)) {
            return this.setState({ erro: true });
        }

        let historico = this.state.historico.slice();
        historico.push(casas.slice());

        casas[casa - 1] = this.state.jogadorAtual.slice();

        const campeao = TemCampeao(casas);
        const trilha = campeao ? campeao : [];
        const jogadorAtual = !campeao ? this.proximoJogador() : this.state.jogadorAtual;

        this.setState({
            casas: casas,
            jogadorAtual: jogadorAtual,
            erro: false,
            campeao: campeao,
            trilha: trilha,
            historico: historico
        });
    }

    limpar = () => {
        this.setState(this.getDefaultState());
    }

    voltar = () => {
        debugger
        let historico = this.state.historico.slice();
        if (historico.length > 1) {
            const casas = historico.splice(-1);
            this.setState({
                casas: casas[0],
                historico: historico,

                erro: false,
                campeao: false,
                trilha: [],
            });
        }
    }

    proximoJogador() {
        return this.state.jogadorAtual === TipoJogador.X ? TipoJogador.O : TipoJogador.X;
    }

    render() {
        return (
            <div className="tabuleiro">
                <div className="linha">
                    {this.state.casas.slice(0, 3).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} trilha={this.state.trilha} index={index} key={index} />)}
                </div>
                <div className="linha">
                    {this.state.casas.slice(3, 6).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} trilha={this.state.trilha} index={index + 3} key={index} />)}
                </div>
                <div className="linha">
                    {this.state.casas.slice(6, 9).map((casa, index) => <Casa onCasaClick={this.casaClick} casa={casa} trilha={this.state.trilha} index={index + 6} key={index} />)}
                </div>

                <div className="jogador-atual">Jogador atual: <b>{this.state.jogadorAtual}</b></div>
                <div className="buttons">
                    <div><button onClick={this.voltar}>Voltar</button></div>
                    <div><button onClick={this.limpar}>Limpar</button></div>
                </div>
                {this.state.campeao && <div className="jogador-campeao">Jogador campeão: <b>{this.state.jogadorAtual}</b></div>}
                {this.state.erro && <div className="erro"><b>Casa já preenchida</b></div>}
            </div>
        )
    }
}

export default Tabuleiro;
