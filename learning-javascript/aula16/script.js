function teste() {
    const output = document.getElementById('div1');
    output.innerHTML = '';

    const lista = {
        alunos: [
            {nome: 'Alda', idade: 25, genero: 'feminino'},
            {nome: 'Ivone', idade: 30, genero: 'feminino'},
            {nome: 'Carlos', idade: 33, genero: 'masculino'},
        ],
    };

    for (let i = 0; i < lista.alunos.length; i++) {
        let aluno = lista.alunos[i];
        createAluno(output, aluno.nome, "nome: ")
        createAluno(output,aluno.idade, "idade: ")
        createAluno(output, aluno.genero, "genero: ")
    }

}

function createAluno(divEl, aluno, key) {
    let paragraphEl = document.createElement('p');
    let text = document.createTextNode(key);
    let text1 = document.createTextNode(aluno);

    paragraphEl.appendChild(text);
    paragraphEl.appendChild(text1);
    divEl.appendChild(paragraphEl);
}