function printUsers() {
  listUsers(function (users) {
    const divEl = document.getElementById('prt-obj');
    let elementById = document.getElementById('btn-prt-obj');
    elementById.addEventListener('click', function () {
      divEl.innerHTML = `<pre><code>${printAllUsers(users)}</code></pre>`;
    });
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

function printUser() {
  listUsers(function (users) {
    const divEl = document.getElementById('prt-1user');
    let htmlParagraphElement = document.createElement('p');

    let elementById = document.getElementById('btn-prt-1user');
    elementById.addEventListener('click', function () {
      let user = printOneUser(users, 1);
      console.log(user);
      htmlParagraphElement.innerHTML =
        '[ ' + user.name + ', ' + user.profession + ' ]';
      divEl.appendChild(htmlParagraphElement);
    });
  });
}

function printOneUser(users, userIndex) {
  return users[userIndex];
}

function listNames() {
  listUsers(function (users) {
    let listNamesEl = document.getElementById('btn-list-names');

    listNamesEl.addEventListener('click', function () {
      const divEl = document.getElementById('list-names');
      divEl.innerHTML = users.map((value) => value.name).join(', ');
    });
  });
}

function listProfessions() {
  listUsers(function (users) {
    let listNamesEl = document.getElementById('btn-list-professions');
    listNamesEl.addEventListener('click', function () {
      const divEl = document.getElementById('list-professions');
      divEl.innerHTML = users.map((value) => value.profession).join(', ');
    });
  });
}

printUsers();
printUser();
listNames();
listProfessions();
