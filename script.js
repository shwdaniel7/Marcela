document.getElementById('iniciar').addEventListener('click', function() {
    document.getElementById('tela-inicial').classList.remove('ativo');
    document.getElementById('minigame-1').classList.add('ativo');
    iniciarJogo();
});

function iniciarJogo() {
    let tempo = 10;
    let contador = setInterval(() => {
        document.getElementById('temporizador').textContent = --tempo;
        if (tempo <= 0) {
            clearInterval(contador);
            verificarResultado();
        }
    }, 1000);
    
    for (let i = 0; i < 20; i++) {
        let coracao = document.createElement('img');
        coracao.src = 'media/coracao.png';
        coracao.classList.add('coracao');
        coracao.style.top = Math.random() * 80 + 'vh';
        coracao.style.left = Math.random() * 80 + 'vw';
        coracao.addEventListener('click', coletarCoracao);
        document.getElementById('jogo').appendChild(coracao);
    }
}

let pontos = 0;
function coletarCoracao(event) {
    event.target.remove();
    if (++pontos >= 15) {
        document.getElementById('resultado').classList.remove('oculto');
    }
}

document.getElementById('mostrar-presente').addEventListener('click', function() {
    document.getElementById('presente').classList.remove('oculto');
    document.getElementById('continuar-1').classList.remove('oculto');
});

document.getElementById('continuar-1').addEventListener('click', function() {
    document.getElementById('minigame-1').classList.remove('ativo');
    document.getElementById('minigame-2').classList.add('ativo');
});

const mensagens = {
    "imperatriz": "When you're lost, and you're alone, and you can't get back again ★ I will find you, darling, and I will bring you home. ★ — Sade.",
    "lua": "I don't care how long it takes ★ As long as I'm with you ★ I've got a smile on my face ★ Save your tears, it'll be okay. ★ — D4vd.",
    "sol": "Mas é claro que o sol ★ Vai voltar amanhã ★ Mais uma vez, eu sei. ★ — Renato Russo",
    "estrela": "Complicada e perfeitinha ★ Você me apareceu ★ Era tudo que eu queria ★ Estrela da sorte ★ Quando à noite ela surgia ★ Meu bem, você cresceu. ★ — Raimundos.",
    "enamorados": "Entre razões e emoções ★ A saída é fazer valer a pena ★ Se não agora, depois, não importa ★ Por você, posso esperar. ★ — NX Zero" 
};

document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', function() {
        let nomeCarta = this.alt.toLowerCase().replace("a ", "").replace("o ", "").replace(" ", "");

        document.getElementById('mensagem-musical').textContent = mensagens[nomeCarta];

        this.classList.add('brilho');
        setTimeout(() => this.classList.remove('brilho'), 500);
    });

    const revelarSurpresaBtn = document.getElementById("revelar-surpresa");
    const mensagemFinal = document.getElementById("mensagem-final");
    
    revelarSurpresaBtn.addEventListener("click", () => {
        mensagemFinal.style.display = "block";
        revelarSurpresaBtn.style.display = "none";
    });

});
