var resposta = 0;

function casamento(){
    document.getElementById('texto').innerHTML = "Raissa, você aceita casar com o Luiz?";
    document.getElementById('butão').style = "display = solid";
    document.getElementById('butão2').style = "display = solid";
}

function recusou(){
    if(resposta == 0){
        alert("Vai rejeitar o coitado?");

    }
}

function aceitou(){
    document.getElementById('textinho').innerHTML = "IIIIIIIIIIIIIIIIIIII SEMPRE DESCONFIEI";
    document.getElementById('aceita').style = "display = solid";
    resultado = 1;
}