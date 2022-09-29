// Seletores
let tela = document.getElementById("forca").getContext("2d");
let palavraSecreta = ""
let dica = ""

let letras = [];
let erros = 6;
let acertos = 0

let teclas = document.getElementsByClassName("botao-teclado")




function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra[0];
    dica = palavra[1]
    console.log(palavraSecreta)
}

function mostraDica() {
    document.getElementById("dica").innerHTML = "dica: " + dica
}


function verificarLetra(key) {
    let estado = false;
    /*if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        console.log("oi")
       

    } else {
        
        estado = true;
        letras.push(key)
        //console.log(key)
        console.log(letras , "if true")
        return estado
    }*/
    if(!letras.includes(key)) {
        letras.push(key)
        console.log(key)
        console.log(letras)
        return estado
        
    }
}

function verificaLetraClicada(letra) {
    if(!letras.includes(letra)) {
        letras.push(letra)
        if(palavraSecreta.includes(letra)) {
            for(let i = 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i);
                    document.getElementById(letra).style.background = "green"
                    adicionaAcertos();
                    ganharJogo();
                }
            }
        } else {
            adicionarLetraIncorreta();
            document.getElementById(letra).style.background = "red"
            escreverLetraIncorreta(letra, erros);
            DesenhaErro();
            perderJogo()
            
        }
        console.log(letras)
    }

}

function adicionarLetraIncorreta() {
    erros -= 1
    //console.log(erros)
}

function adicionaAcertos() {
    acertos++
    //console.log(acertos)
}





function iniciaJogo() {
    document.getElementById("div-começar").style.display = "none";
    document.getElementById("caixa-add-palavra").style.display = "none"
    escolherPalavraSecreta();
    desenhaCanvas();
    desenhaLinhas();
    escreveErro();
    mostraDica();
    document.getElementById("teclado-virtual").style.display = "flex";
    
   

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        verificaLetraClicada(letra)
        /*if(!letras.includes(letra)) {
            letras.push(letra)
            if(palavraSecreta.includes(letra)) {
                for(let i = 0; i < palavraSecreta.length; i++) {
                    if(palavraSecreta[i] === letra) {

                        escreverLetraCorreta(i);
                        adicionaAcertos();
                        ganharJogo()
                    }
                }
            } else {
                adicionarLetraIncorreta(letra);
                escreverLetraIncorreta(letra, erros);
                DesenhaErro();
                
            }
            console.log(letras)
        }
    */
    }
    
}

function DesenhaErro() {
    if(erros == 5) {
        desenhaCabeca();
    } else if(erros == 4) {
        desenhaCorpo();
    } else if(erros == 3) {
        desenhaPernaDireita();
    } else if(erros == 2) {
        desenhaPernaEsqueda();
    } else if(erros == 1) {
        desenhaBracoDireito();
    } else if(erros < 1) {
        desenhaBracoEsquerdo();
        document.getElementById("id-perdeu").style.display = "flex"
        document.getElementById("mostra-palavra").innerHTML = "A palavra correta era " + palavraSecreta

    }

}

function reiniciar() {
    
    limpaTela();
    document.getElementById("caixa-perdeuganhou").style.display = "none"
    limpaTeclas()
    

    iniciaJogo();
    erros = 6
    acertos = 0
   
}

function ganharJogo() {
    if(acertos == palavraSecreta.length ) {
        document.getElementById("id-ganhou").style.display = "flex"
        document.getElementById("id-perdeu").style.display = "none"
        document.getElementById("caixa-perdeuganhou").style.display = "flex"
        letras = []
    } 
}

function perderJogo() {
    if(erros == 0 ) {
        document.getElementById("id-perdeu").style.display = "flex"
        document.getElementById("id-ganhou").style.display = "none"
        document.getElementById("caixa-perdeuganhou").style.display = "flex"
        letras = []
    } 
}


function clicaLetra(e) {
    let tecla = e
    console.log(tecla)
    verificaLetraClicada(tecla)
    
}

function limpaTeclas() {
    document.getElementById("Q").style.background = "white"
    document.getElementById("W").style.background = "white"
    document.getElementById("E").style.background = "white"
    document.getElementById("R").style.background = "white"
    document.getElementById("T").style.background = "white"
    document.getElementById("Y").style.background = "white"
    document.getElementById("U").style.background = "white"
    document.getElementById("I").style.background = "white"
    document.getElementById("O").style.background = "white"
    document.getElementById("P").style.background = "white"
    document.getElementById("A").style.background = "white"
    document.getElementById("S").style.background = "white"
    document.getElementById("D").style.background = "white"
    document.getElementById("F").style.background = "white"
    document.getElementById("G").style.background = "white"
    document.getElementById("H").style.background = "white"
    document.getElementById("J").style.background = "white"
    document.getElementById("K").style.background = "white"
    document.getElementById("L").style.background = "white"
    document.getElementById("Ç").style.background = "white"
    document.getElementById("Z").style.background = "white"
    document.getElementById("X").style.background = "white"
    document.getElementById("C").style.background = "white"
    document.getElementById("V").style.background = "white"
    document.getElementById("B").style.background = "white"
    document.getElementById("N").style.background = "white"
    document.getElementById("M").style.background = "white"
    
}

function caixaNovaPalavra() {
    document.getElementById("caixa-add-palavra").style.display ="flex"
    document.getElementById("add-palavra-jogo").style.display = "none"
    document.getElementById("nova-palavra").focus()
}

function adicionarNovaPalavra() {
    let novaPalavra = document.getElementById("nova-palavra").value.toUpperCase()
    let novaDica = document.getElementById("nova-dica").value.toUpperCase()
    palavras.push([novaPalavra,novaDica]);
    document.getElementById("nova-palavra").value = ""
    document.getElementById("nova-dica").value = ""
    document.getElementById("nova-palavra").focus()
}

/*
let teclado = document.querySelector(".botao-teclado")

teclado.addEventListener("click" , clicaLetra)*/