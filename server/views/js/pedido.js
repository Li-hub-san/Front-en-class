function loadDoc() {
  requestUsers(function (users) {
    printTable(users);
  });

  document.getElementById('teste').addEventListener('click', function () {
    requestUser(Math.floor(Math.random() * 3) + 1, function (user) {
      printTable([user]);
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

function printTable(users) {
  const table = document.getElementById('table');

  users.forEach(function (element, index) {
    const row = table.insertRow(index + 1);

    insertCell(row, 0, "<button id='" + index + "'>Detalhe</button>");
    insertCell(row, 0, element.profession);
    insertCell(row, 0, element.id);
    insertCell(row, 0, element.password);
    insertCell(row, 0, element.name);
  });

  addEventButton(users);
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
      document.getElementById('i-profession').value = element.profession;
    });
  });
}

loadDoc();
