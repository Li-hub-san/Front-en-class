document.getElementById('form-insert').addEventListener('submit', function () {
  document.getElementById('modal-insert').style.display = 'none';
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const profession = document.getElementById('profession').value;

  const data =
    'password=' + password + '&name=' + name + '&profession=' + profession;

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/addUser');
  xhttp.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8'
  );

  xhttp.onload = function () {
    console.log(this.responseText);
  };

  xhttp.send(data);
});

document.getElementById('cancel-insert').addEventListener('click', function () {
  document.getElementById('modal-insert').style.display = 'none';
});

document.getElementById('btn-insert').addEventListener('click', function () {
  document.getElementById('modal-insert').style.display = 'block';

  document.getElementById('name').value = '';
  document.getElementById('password').value = '';
  document.getElementById('profession').value = '';
});
