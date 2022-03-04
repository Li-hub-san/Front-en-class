document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('modal').style.display = 'none';
  const name = document.getElementById('i-name').value;
  const password = document.getElementById('i-password').value;
  const id = document.getElementById('i-id').value;

  updateUser(
    { name: name, password: password, id: id},
    function (user) {
      console.log(user);
    }
  );
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
    'password=' +
    user.password +
    '&id=' +
    user.id +
    '&name=' +
    user.name;
  // const data = JSON.stringify(user);

  request.send(data);
}
