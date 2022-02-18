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

/**
 * Prints all object properties to DOM
 */
function printInfo() {
  const infoEl = document.getElementById('info');

  const lista = {
    alunos: [
      { nome: 'Alda', idade: 25, genero: 'feminino' },
      {
        nome: 'Ivone',
        idade: 30,
        genero: 'feminino',
      },
      { nome: 'Carlos', idade: 33, genero: 'masculino' },
    ],
  };

  console.log(lista);

  let output = '';
  for (let i = 0; i < lista.alunos.length; i++) {
    let aluno = lista.alunos[i];

    let properties = `
      <div class="aluno">
        <p>nome: ${aluno.nome}</p>
        <p>idade: ${aluno.idade}</p>
        <p>genero: ${aluno.genero}</p>
      </div>`;

    output += properties;
  }

  infoEl.innerHTML = output;
}

/**
 * Receives a class and styles it.
 *
 * @param className class
 */
function styleClass(className) {
  const infoEl = document.getElementById('info');
  const classEls = document.getElementsByClassName(className);
  infoEl.style.display = 'flex';
  infoEl.style.justifyContent = 'center';

  for (let i = 0; i < classEls.length; i++) {
    let element = classEls[i];

    element.style.width = '20%';
    element.style.margin = '10px';
    element.style.padding = '10px 12px';
    element.style.borderRadius = '15px';
    element.style.border = '1px solid white';
    element.style.backgroundColor = '#801515';
    element.style.fontFamily = 'arial, sans-serif';
    element.style.color = 'white';
  }
}

/**
 * Receives a tag and styles it.
 *
 * @param tagName tag
 */
function styleTag(tagName, chosenColor, tagSize) {
  const tags = document.getElementsByTagName(tagName);

  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];

    tag.style.display = 'flex';
    tag.style.justifyContent = 'center';
    tag.style.fontFamily = 'arial, sans-serif';
    tag.style.color = chosenColor;
    tag.style.fontSize = tagSize;
  }
}

function removeClassStyle(className) {
  const infoEl = document.getElementById('info');
  const classEls = document.getElementsByClassName(className);
  infoEl.style.display = 'initial';
  infoEl.style.justifyContent = 'initial';

  for (let i = 0; i < classEls.length; i++) {
    let element = classEls[i];
    element.style.backgroundColor = 'initial';
    element.style.color = 'initial';
    element.style.width = 'initial';
    element.style.margin = 'initial';
    element.style.padding = 'initial';
    element.style.borderRadius = 'initial';
    element.style.border = 'initial';
    element.style.fontFamily = 'initial';
  }
}

function paintBody() {
  document.body.style.backgroundColor = '#FFAAAA';
}

function styleButtons() {
  let element = document.getElementById('btnWrapper');
  element.style.display = 'flex';
  element.style.alignContent = 'center';
  element.style.justifyContent = 'center';
  const buttonEls = document.getElementsByTagName('button');

  for (let i = 0; i < buttonEls.length; i++) {
    let button = buttonEls[i];
    button.style.padding = '20px 10px';
    button.style.margin = '10px';
    button.style.borderRadius = '5px';
    button.style.borderColor = 'white';
    button.style.borderImage = 'none';
    button.style.border = '1px solid white';
    button.style.backgroundColor = '#D46A6A';
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
  }
}
