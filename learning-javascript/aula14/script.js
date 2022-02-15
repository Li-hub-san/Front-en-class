/**
 * Removes all <p> tags with an odd innerText.
 */
function removeOddParagraphTags() {
  const pTags = document.getElementsByTagName('p');

  for (let i = pTags.length - 1; i >= 0; i--) {
    let currentTag = pTags[i];
    let isOdd = +currentTag.innerHTML % 2 !== 0;
    if (isOdd && !isNaN(+currentTag.innerHTML)) {
      currentTag.remove();
    }
  }
}

function printInfo() {
  const infoEl = document.getElementById('info');

  const lista = {
    alunos: [
      { nome: 'Alda', idade: 25 },
      { nome: 'Ivone', idade: 30 },
      { nome: 'Ana', idade: 33 },
    ],
  };

  let output = '';
  for (let i = 0; i < lista.alunos.length; i++) {
    let aluno = lista.alunos[i];

    let properties = `
      <div class="aluno">
        <p>nome: ${aluno.nome}</p>
        <p>idade: ${aluno.idade}</p>
      </div>`;

    output += properties;
  }

  infoEl.innerHTML = output;
}
