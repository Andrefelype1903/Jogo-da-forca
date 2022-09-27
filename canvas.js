function desenhaCanvas() {
    tela.lineWidth = 4;
    tela.lineCap = "round";
    tela.lineJoin = "round";

    tela.fillStyle = "transparent";
    tela.fillStroke = "#0A3871";

    //Manipulação

    tela.fillRect(0,0,1800,860);
    tela.beginPath();
    tela.moveTo(415,500);
    tela.lineTo(565,500);
    tela.moveTo(450,500);
    tela.lineTo(450,200);
    tela.lineTo(525,200);
    tela.lineTo(525,250);
    tela.moveTo(450,220)
    tela.lineTo(470,200)
    //tela.stroke();
    //tela.closePath();
}
 function limpaTela() {
    tela.clearRect(0,0,1800,860)
 }


function desenhaCabeca() {
    tela.fillStyle = "#000000";
    tela.beginPath();
    tela.arc(525, 265, 15, 0, 2 * Math.PI);
    tela.fill();
    tela.fillStyle = "transparent"
    tela.beginPath()
    tela.arc(525, 265, 10, 0, 2 * Math.PI);
    tela.fill();
}

function desenhaCorpo() {
    tela.fillStyle = "#000000";
    tela.fillStroke = "#000000";
    tela.lineWidth = 6;
    tela.beginPath();
    tela.moveTo(525,272);
    tela.lineTo(525,342);
    tela.stroke();
    tela.closePath();
}

function desenhaPernaDireita() {
    tela.fillStyle = "#000000";
    tela.fillStroke = "#000000";
    tela.lineWidth = 6;
    tela.beginPath();
    tela.moveTo(525,342);
    tela.lineTo(545,362);
    tela.stroke();
    tela.closePath();
}

function desenhaPernaEsqueda() {
    tela.fillStyle = "#000000";
    tela.fillStroke = "#000000";
    tela.lineWidth = 6;
    tela.beginPath();
    tela.moveTo(525,342);
    tela.lineTo(505,362);
    tela.stroke();
    tela.closePath();
}

function desenhaBracoDireito() {
    tela.fillStyle = "#000000";
    tela.fillStroke = "#000000";
    tela.lineWidth = 6;
    tela.beginPath();
    tela.moveTo(525,290);
    tela.lineTo(545,320);
    tela.stroke();
    tela.closePath();
}

function desenhaBracoEsquerdo() {
    tela.fillStyle = "#000000";
    tela.fillStroke = "#000000";
    tela.lineWidth = 6;
    tela.beginPath();
    tela.moveTo(525,290);
    tela.lineTo(505,320);
    tela.stroke();
    tela.closePath();
}

function desenhaLinhas() {
    tela.lineWidth = 2;
    tela.lineCap = "round";
    tela.lineJoin = "round";

    tela.fillStyle = "transparent";
    tela.fillStroke = "#0A3871";

    let largura = 400/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tela.moveTo(290+(largura * i), 640);
        tela.lineTo(315+(largura * i), 640);
    }
    tela.stroke();
    tela.closePath();
}

function escreveErro(){
    tela.font = "25px inter";
    tela.lineCap = "round";
    tela.fillStyle = "#000000";
    tela.lineWidth = 6;
    tela.fillText("ERROS:", 290, 690)
}

function escreverLetraCorreta(index){
    tela.font = "bold 32px inter";
    tela.lineCap = "round";
    tela.fillStyle = "#000000";
    tela.lineWidth = 6;
    let largura = 400/palavraSecreta.length;
    tela.fillText(palavraSecreta[index], 291 + (largura * index) , 630)
}

function escreverLetraIncorreta(letra, erros){
    tela.font = "25px inter";
    tela.lineCap = "round";
    tela.fillStyle = "#000000";
    tela.lineWidth = 6;
    let largura = 400/palavraSecreta.length;
    tela.fillText(letra, 200 + 40 * (10 - erros) , 690, 40)
}