document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValid = isInputValid();
  if (!inputValid) {
    return;
  }

  document.getElementById('modal').style.display = 'none';
  const name = document.getElementById('i-name').value;
  const password = document.getElementById('i-password').value;
  const id = document.getElementById('i-id').value;

  updateUser({ name: name, password: password, id: id }, function (user) {
    console.log(user);
  });
});

function updateUser(user, callback) {
  const request = new XMLHttpRequest();
  request.open('POST', '/setUser');

  request.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );
  // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  request.onload = function () {
    const user = JSON.parse(this.responseText);

    if (!!callback) {
      callback(user);
    }
  };

  const data =
    'password=' + user.password + '&id=' + user.id + '&name=' + user.name;
  // const data = JSON.stringify(user);

  request.send(data);
}

// apenas se não estiver a usar o required no input (formulário)
function isInputValid() {
  const nameEl = document.getElementById('i-name');
  const passwordEl = document.getElementById('i-password');

  if (nameEl.value === '' || passwordEl.value === '') {
    if (nameEl.value === '') {
      nameEl.classList.add('invalid');
    } else {
      nameEl.classList.remove('invalid');
    }

    if (passwordEl.value === '') {
      passwordEl.classList.add('invalid');
    } else {
      passwordEl.classList.remove('invalid');
    }

    return false;
  }

  // se chegar aqui significa que não entrou nos ifs.

  // quando já estão preenchidos os campos, remover a classe invalid
  nameEl.classList.remove('invalid');
  passwordEl.classList.remove('invalid');

  return true;
}
