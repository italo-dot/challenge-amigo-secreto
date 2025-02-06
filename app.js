

let listaDeAmigos = [];
let indiceDoAmigo;


function exibirListaAmigos(){
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML ='';


    listaDeAmigos.forEach(amigo =>{
        let itemDelista = document.createElement('li');
        itemDelista.textContent = amigo;
        lista.appendChild(itemDelista);
    });



}


function adicionarAmigo(){

        let selecionar = document.querySelector('input').value.trim().toUpperCase();

        if(!isNaN(selecionar) ||  selecionar.length < 4){
            alert('Digite um nome válido');

        }else{
            
            listaDeAmigos.push(selecionar);
            limparCampo();
            exibirListaAmigos();
        }

}

function sortearAmigo(){
    let minParticipantes = 3; 

    if (listaDeAmigos.length < minParticipantes) {
        alert(`É necessário pelo menos ${minParticipantes} amigos para o sorteio.`);
        
    }else{
    indiceDoAmigo = Math.floor(Math.random() * listaDeAmigos.length); 
    let amigoSortado = document.getElementById('resultado');
    amigoSortado.innerHTML = `O amigo sorteado é: <strong>${listaDeAmigos[indiceDoAmigo]}</strong>`;
    exibirBotão()
    }
}

function reiniciarJogo(){
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    esconderBotao();
   

}


function exibirBotão(){
        let botao = document.getElementById('btreiniciar');
        botao.style.display = 'block';
}

function esconderBotao() {
    let botao = document.getElementById('btreiniciar');
    botao.style.display = 'none'; 
}

esconderBotao();

function limparCampo(){
    campoLimpo = document.querySelector('input');

    if(campoLimpo){
        campoLimpo.value = '';

    }

}

