function loadDoc() {
  requestUsers(function (users) {
    printTable(users);
  });

  printUser('user-1', 1);
  printUser('user-2', 2);
  printUser('user-3', 3);

  document.getElementById('refresh').addEventListener('click', function () {
    requestUsers(function (users) {
      printTable(users, true);
    });
  });
}

function requestUsers(callback) {
  // cria um novo pedido AJAX
  const xhttp = new XMLHttpRequest();

  // define o que é o método (basic CRUD: Create, Retrieve, update, delete -> POST, GET, PUT, DELETE) e o que é o url
  xhttp.open('GET', '/listUsers');

  // o que é para fazer quando o pedido terminar (receber a resposta)
  xhttp.onload = function () {
    // this.responseText -> resposta do servidor em texto
    // JSON.parse -> parse dessa resposta para um objecto
    // .user -> aceder à propriedade da resposta que contém o array de users
    const users = JSON.parse(this.responseText).user;

    // função assincrone (sem return) -> se existir uma função, chamar a função com os users
    if (!!callback) {
      callback(users);
    }
  };

  // executa o pedido
  xhttp.send();
}

function requestUser(id, callback) {
  let xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open('GET', '/getUser?id=' + id);

  xmlHttpRequest.onload = function () {
    const user = JSON.parse(this.responseText);

    if (!!callback) {
      callback(user);
    }
  };

  xmlHttpRequest.send();
}

function printTable(users, clear = false) {
  const table = document.getElementById('table');

  if (clear) {
    clearTable();
  }

  users.forEach(function (user, index) {
    // o prof tinha index + 1 -> imprime na 1ªlinha. Achei melhor adicionar no fim.
    const row = table.insertRow(-1);

    insertCell(row, 0, user.name.toUpperCase());
    insertCell(row, 1, user.profession);
    insertCell(row, 2, user.password.replace(/./g, '*'));
    insertCell(row, 3, user.id);
    insertCell(row, 4, getDate());
    insertCell(row, 5, "<button id='" + index + "'>Detalhe</button>");
  });

  addEventButton(users);
}

// limpa a tabela de todos os registos (mantém o header)
function clearTable() {
  const table = document.getElementById('table');
  // vai da última linha até à segunda linha (não apaga o header)
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function insertCell(row, index, value) {
  const cell1 = row.insertCell(index);
  cell1.innerHTML = value;
}

function addEventButton(users) {
  users.forEach(function (element, index) {
    let btn = document.getElementById(index);
    btn.addEventListener('click', function () {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('i-name').value = element.name;
      document.getElementById('i-password').value = element.password;
      document.getElementById('i-id').value = element.id;
    });
  });
}

function getDate() {
  const date = new Date();
  return (
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  );
}

function printUser(userId, user) {
  document.getElementById(userId).addEventListener('click', function () {
    requestUser(user, function (user) {
      printTable([user], true);
    });
  });
}

loadDoc();
