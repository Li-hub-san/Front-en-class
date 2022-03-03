function printUserObjects(users) {
  const divEl = document.getElementById('prt-obj');
  let elementById = document.getElementById('btn-prt-obj');
  elementById.addEventListener('click', function () {
    divEl.innerHTML = `<pre><code>${printAllUsers(users)}</code></pre>`;
  });
}

function printAllUsers(users) {
  let result = '';
  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    result +=
      'id: ' +
      user.id +
      '\nname: ' +
      user.name +
      ',\nprofession: ' +
      user.profession +
      '\n\n';
  }
  return result;
}

function printUser(user) {
  const divEl = document.getElementById('prt-1user');
  let htmlParagraphElement = document.createElement('p');

  let elementById = document.getElementById('btn-prt-1user');
  elementById.addEventListener('click', function () {
    htmlParagraphElement.innerHTML =
      '[ ' + user.name + ', ' + user.profession + ' ]';
    divEl.appendChild(htmlParagraphElement);
  });
}

function listNames(users) {
  let listNamesEl = document.getElementById('btn-list-names');

  listNamesEl.addEventListener('click', function () {
    const divEl = document.getElementById('list-names');
    divEl.innerHTML = users.map((value) => value.name).join(', ');
  });
}

function listProfessions(users) {
  let listNamesEl = document.getElementById('btn-list-professions');
  listNamesEl.addEventListener('click', function () {
    const divEl = document.getElementById('list-professions');
    divEl.innerHTML = users.map((value) => value.profession).join(', ');
  });
}

function listId(users) {
  let btnEl = document.getElementById('btn-list-id');
  btnEl.addEventListener('click', function () {
    const divEl = document.getElementById('list-id');
    divEl.innerHTML = users.map((value) => value.id).join(', ');
  });
}

function hideTableColum(tableColumn) {
  document
    .getElementById('btn-hide-column')
    .addEventListener('click', function () {
      [
        ...document.querySelectorAll(
          `table td:nth-child(${tableColumn}), table th:nth-child(${tableColumn})`
        ),
      ].forEach((el) => (el.style.display = 'none'));
    });
}

function hideTable() {
  document
    .getElementById('btn-hide-table')
    .addEventListener('click', function () {
      document.getElementById('table').style.display = 'none';
    });
}

function showPassword() {
  const input = document.getElementById('i-password');
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}

function removeRow() {
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let even = i % 2;

    if (even) {
      row.style.display = 'none';
      console.log(i);
    }
  }
}
