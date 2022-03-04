document.getElementById('form').addEventListener('submit', function (e) {
  // e.preventDefault
  document.getElementById('modal').style.display = 'none';
  const name = document.getElementById('i-name').value;
  const password = document.getElementById('i-password').value;
  const id = document.getElementById('i-id').value;
  const profession = document.getElementById('i-profession').value;

  const data =
    'password=' +
    password +
    '&id=' +
    id +
    '&name=' +
    name +
    '&profession=' +
    profession;

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/setUser');
  xhttp.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );

  xhttp.onload = function () {
    console.log(this.responseText);
  };

  xhttp.send(data);
  // location.reload();
});

document.getElementById('cancel').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
