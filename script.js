const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
//querySelector que corresponde ao grupo dos seletores

btn.addEventListener('click', () => {
 const url = 'https://www.google.com.br/search?q=' + search.value;
 window.open(url,'_self');
})
//addEventListener - Manipula os eventos de um elemento, esperando o retorno de evento.
//KeyPress - evento que executa e interpreta Os caractéres maiúsculos e minúsclos.
//e.key = eventKey, reagirá ao pressionar tecla enter
search.addEventListener('keypress', function(e) {
 if(e.key === "Enter"){
 const url = 'https://www.google.com.br/search?q=' + search.value; //Valor de Pesquisa
 search.click();
 //carrega um recurso específico de navegação.
 window.open(url,'_self'); //self usado para resgatar aba ou janel nos navegadores
 }
})