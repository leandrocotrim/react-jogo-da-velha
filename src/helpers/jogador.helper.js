export const TipoJogador = {
    X: 'X',
    O: 'O'
}

export function Random() {
    return Math.floor(Math.random() * 10) % 2 === 0
        ? TipoJogador.X : TipoJogador.Y;
}

export const Casas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const trilhas = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export function TemCampeao(linhas) {
    return trilhas.find(t => linhas[t[0]] === linhas[t[1]] && linhas[t[1]] === linhas[t[2]]);
}