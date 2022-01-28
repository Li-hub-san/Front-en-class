console.log('Adicionei o javascript.');

alert('Adicionei o script');

debugger;

console.log(navigator.userAgent);

let sectionP1 = document.getElementById('section-p-1');
sectionP1.style.color = 'white';
sectionP1.style.background = 'black';
console.log(sectionP1);

let pElements = document.getElementsByTagName('p');
console.log(pElements);
pElements[1].addEventListener('click', function () {
  alert('Hello World!');
});
