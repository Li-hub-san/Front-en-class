function loadDoc() {
  listUsers(function (users) {
    printUserTable(users);

    printUserObjects(users);
    printUser(users[1]);
    listNames(users);
    listProfessions(users);
    listId(users);
    hideTableColum(1);
    hideTable();
  });
}

function printUserTable(users) {
  const table = document.getElementById('table');

  users.forEach(function (user, index) {
    const row = table.insertRow(index + 1);

    insertCell(
      row,
      0,
      "<button id='detalhe-" +
        index +
        "'>Detalhe</button>" +
        "<button id='apagar-" +
        index +
        "'>Apagar</button>"
    );

    insertCell(row, 0, user.profession);
    insertCell(row, 0, user.password);
    insertCell(row, 0, user.name);
    insertCell(row, 0, user.id);
  });

  addDetalheEvent(users);
  addApagarEvent(users);
}

function listUsers(successCallback) {
  const xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onload = function () {
    const users = JSON.parse(this.responseText).user;
    successCallback && successCallback(users);
  };

  xmlHttpRequest.open('GET', '/listUsers');
  xmlHttpRequest.send();
}

function insertCell(row, index, value) {
  const cell1 = row.insertCell(index);
  cell1.innerHTML = value;
}

function addDetalheEvent(users) {
  users.forEach(function (element, index) {
    let btn = document.getElementById('detalhe-' + index);
    btn.addEventListener('click', function () {
      document.getElementById('modal').style.display = 'block';

      document.getElementById('i-name').value = element.name;
      document.getElementById('i-password').value = element.password;
      document.getElementById('i-id').value = element.id;
      document.getElementById('i-profession').value = element.profession;
    });
  });
}

function addApagarEvent(users) {
  users.forEach(function (user, index) {
    let btn = document.getElementById('apagar-' + index);

    btn.addEventListener('click', function () {
      const data = 'id=' + user.id;

      const xhttp = new XMLHttpRequest();
      xhttp.open('DELETE', '/deleteUser');
      xhttp.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8'
      );

      xhttp.onload = function () {
        console.log(this.responseText);
        // final do 'pedido', refresh automático
        location.reload();
      };

      xhttp.send(data);
    });
  });
}

function mandarPedidoBackend() {
  // Cria novo pedido
  let xmlHttpRequest = new XMLHttpRequest();

  // Define o método (GET, POST, PUT, DELETE) e o URL
  xmlHttpRequest.open('GET', '/exemplo');
  xmlHttpRequest.send();
}

loadDoc();
