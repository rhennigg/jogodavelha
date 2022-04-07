let jogador = null, vencedor = null;
let jogador_selecionado = document.getElementById('jogador-selecionado');
let vencedor_selecionado = document.getElementById('vencedor-selecionado');
let p1 = document.getElementById('pont-j1');
let p2 = document.getElementById('pont-j2');
let quadrados = document.getElementsByClassName('quadrado');
let pontosx = 0, pontoso = 0;

mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id);
    
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#909';

    jogador === 'X' ? jogador = 'O' : jogador = 'X';
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogador_selecionado.innerHTML = jogador;
}

function checaVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudaCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedor_selecionado.innerHTML = vencedor;
    console.log(pontosx);
    console.log(pontoso);
    (vencedor == 'O')?(pontoso++):(pontosx++);
    console.log(pontosx);
    p1.innerHTML = pontosx;
    p2.innerHTML = pontoso;
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    let ehigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        ehigual = true;
    }

    return ehigual;
}

function reiniciar() {
    vencedor = null;
    vencedor_selecionado.innerHTML = '';

    for(let i=1; i<10; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = "rgb(40, 143, 143)";
        quadrado.style.color = "rgb(40, 143, 143)";
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}