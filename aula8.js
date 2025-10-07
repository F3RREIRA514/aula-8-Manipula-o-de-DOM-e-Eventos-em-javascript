//selecionando elementos do html
const main = document.querySelector('main');
const section = document.querySelector('#hero');
console.log(main);
console.log(section);

//criando um novo elemento html
let titulo = document.createElement('h1');
console.log(titulo);
// inseriu o elemento criado na section
section.appendChild(titulo);
let container = document.createElement('div');
section.appendChild(container);
//adicionando texto em um elemento
titulo.textContent = "Hellow World";
// Adicionando classes ao elemento
titulo.classList.add('titulo');
let counter =0;
//Monitoramento eventos no navegador
titulo.addEventListener('click', (e)=>{
    //adiciona ou remove  a classe
    titulo.classList.toggle('active');  
    //recupera html dentro da div
    let containerValue = container.innerHTML;
    //mantem o conteudo anterior da div e concatena novo html
    container.innerHTML = containerValue + `<p>Texto adicionando pelo evento!</p>`;
})