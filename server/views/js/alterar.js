document.getElementById('change').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
  const name = document.getElementById('i-name').value;
  const password = document.getElementById('i-password').value;
  const id = document.getElementById('i-id').value;
  const profession = document.getElementById('i-profession').value;

  updateUser(
    { name: name, password: password, id: id, profession: profession },
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
    user.name +
    '&profession=' +
    user.profession;

  request.send(data);
}
