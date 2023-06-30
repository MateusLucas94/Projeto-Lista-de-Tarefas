function removeFinalizados(){
  
    const array = document.querySelectorAll(".listaDaHora")
    for(let index = 0; index < array.length ; index += 1){
        let nomeDaClasse = array[index].className
        console.log (nomeDaClasse.includes('completed'));
        if(nomeDaClasse.includes('completed')){
            document.getElementById('lista-tarefas').removeChild(array[index])
        }

    }

}

let botaoRemoverFinalizados = document.getElementById('remover-finalizados')
botaoRemoverFinalizados.addEventListener('click', removeFinalizados)

//https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
// removeAllChildNodes()
function apagarTudo(){
    const paiDelas = document.getElementById('lista-tarefas')
    paiDelas.innerHTML = '';
}
let botaoApagar = document.getElementById('apaga-tudo')
botaoApagar.addEventListener('click', apagarTudo)


function limparFundo() {
    const fundoSelecionado = document.querySelector('.fundoDoTexto');
    if (fundoSelecionado !== null) fundoSelecionado.classList.remove('fundoDoTexto');
}


function selecionarTarefa(fundoTarefa) {
    limparFundo()
    fundoTarefa.classList.add('fundoDoTexto')

}


/*https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList */
/* toggle tem a função de se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.*/
function completarTarefa (doubleC){
    doubleC.classList.toggle('completed')

}

function adicionarItens(minhaLista, listaLi) {
    listaLi.setAttribute('id', minhaLista);
    listaLi.addEventListener('click', function () {
        selecionarTarefa(listaLi);
    });
    listaLi.addEventListener('dblclick', function () {
        completarTarefa(listaLi);
    });
}

function criandoNovaLista() {
    let minhaLista = document.querySelector('#lista-tarefas');
    let listaLi = document.createElement('li');
    let minhaTarefa = document.querySelector('#texto-tarefa');
    listaLi.setAttribute('tagLi', 'coisasAFazer');
    listaLi.classList.add('listaDaHora');
    minhaLista.appendChild(listaLi).innerText = minhaTarefa.value;
    adicionarItens(minhaLista.childElementCount, listaLi);
    minhaTarefa.value = '';
}
let botao = document.getElementById('criar-tarefa')
botao.addEventListener('click', criandoNovaLista)