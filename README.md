# **Projeto Sorteio de Amigos**

Este projeto permite criar uma lista de amigos, sortear aleatoriamente um nome da lista e reiniciar o jogo quando desejar. É uma aplicação simples feita com HTML, CSS e JavaScript, ideal para fins de aprendizado.

---

## **🔧 Tecnologias Utilizadas**

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização da interface do usuário.
- **JavaScript**: Lógica de adição, sorteio e reinício de amigos.

---

## **📦 Como Rodar o Projeto**

Não é necessário instalar nada! Basta abrir o arquivo `index.html` no seu navegador.

1. Clone o repositório ou baixe o projeto.
2. Abra o arquivo `index.html` no seu navegador.

---

## **💡 Funcionalidades**

- **Adicionar amigos**: O usuário pode digitar o nome de um amigo e adicioná-lo à lista.
- **Sortear amigo**: Quando o número de amigos for igual ou superior a 3, o sorteio será realizado.
- **Reiniciar**: Limpa a lista de amigos e esconde o botão de reinício.

---

## **📝 Como Usar**

### **1. Adicionar Amigos**
Digite o nome de um amigo no campo de entrada e clique em "Adicionar Amigo". O nome será adicionado à lista.

```javascript
function adicionarAmigo() {
    let selecionar = document.querySelector('input').value.trim().toUpperCase();

    if (!isNaN(selecionar) || selecionar.length < 4) {
        alert('Digite um nome válido');
    } else {
        listaDeAmigos.push(selecionar);
        exibirListaAmigos();
    }
}
```

### **2. Sortear Amigo**
Depois de adicionar pelo menos 3 amigos, clique em "Sortear Amigo" para selecionar aleatoriamente um nome da lista.

```javascript
function sortearAmigo() {
    let minParticipantes = 3;

    if (listaDeAmigos.length < minParticipantes) {
        alert(`É necessário pelo menos ${minParticipantes} amigos para o sorteio.`);
        return;
    }

    let indiceDoAmigo = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSortado = document.getElementById('resultado');
    amigoSortado.innerHTML = `O amigo sorteado é: <strong>${listaDeAmigos[indiceDoAmigo]}</strong>`;
}
```

### **3. Reiniciar Jogo**
Clique em "Reiniciar" para limpar a lista de amigos e esconder o botão de reinício.

```javascript
function reiniciarJogo() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    esconderBotao();
}
```

---

## **🎨 Layout da Interface**

A interface do projeto é composta por:
- Um campo de entrada para adicionar os nomes dos amigos.
- Um botão para adicionar os amigos à lista.
- Uma lista exibindo todos os amigos.
- Botões para sortear o amigo e reiniciar o jogo.

---

## **⚙️ Detalhes do Código**

### **Adicionando Amigos**
A função `adicionarAmigo()` é responsável por adicionar o nome do amigo à lista de amigos:

```javascript
function adicionarAmigo() {
    let selecionar = document.querySelector('input').value.trim().toUpperCase();

    if (!isNaN(selecionar) || selecionar.length < 4) {
        alert('Digite um nome válido');
    } else {
        listaDeAmigos.push(selecionar);
        exibirListaAmigos();
    }
}
```

### **Sortear Amigo Aleatório**
A função `sortearAmigo()` escolhe aleatoriamente um amigo da lista, exibindo o nome sorteado:

```javascript
function sortearAmigo() {
    let minParticipantes = 3;

    if (listaDeAmigos.length < minParticipantes) {
        alert(`É necessário pelo menos ${minParticipantes} amigos para o sorteio.`);
        return;
    }

    let indiceDoAmigo = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSortado = document.getElementById('resultado');
    amigoSortado.innerHTML = `O amigo sorteado é: <strong>${listaDeAmigos[indiceDoAmigo]}</strong>`;
}
```

### **Reiniciar Jogo**
A função `reiniciarJogo()` limpa a lista de amigos e reseta o jogo:

```javascript
function reiniciarJogo() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    esconderBotao();
}
```

---

## **🎯 Funcionalidades Finais**

- A **lista de amigos** é preenchida dinamicamente.
- O **sorteio** é feito com base na quantidade de amigos na lista (pelo menos 3).
- O **botão de reinício** desaparece após ser clicado, reiniciando a aplicação.

---

## **📅 Últimas Atualizações**

- Adicionada a funcionalidade de sorteio de amigos.
- Implementada a funcionalidade de reinício de jogo.
- Melhorias na validação dos nomes e layout.

---

## **👨‍💻 Como Contribuir**

Fique à vontade para contribuir com melhorias ou sugestões! Você pode fazer um *fork* do repositório e enviar um *pull request*.

---
