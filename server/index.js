const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

let result = {
  user: [
    { id: 1, name: 'mahesh', password: 'password1', profession: 'teacher' },
    { id: 2, name: 'suresh', password: 'password2', profession: 'librarian' },
    { id: 3, name: 'ramesh', password: 'password3', profession: 'clerk' },
  ],
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/listUsers', function (req, res) {
  res.send(result);
});

app.get('/getUser', function (req, res) {
  let id = +req.query.id;
  let entity = {};

  result.user.forEach((element) => {
    if (element.id === id) {
      entity = element;
    }
  });

  res.send(entity);
});

app.post('/setUser', function (req, res) {
  let id = +req.body.id;
  let name = req.body.name;
  let password = req.body.password;
  let profession = req.body.profession;
  let indexG = 0;

  result.user.forEach((user, index) => {
    if (user.id === id) {
      indexG = index;
      result.user[index].name = name;
      result.user[index].password = password;
      result.user[index].profession = profession;
    }
  });

  res.send(result.user[indexG]);
});

app.post('/addUser', function (req, res) {
  let name = req.body.name;
  let password = req.body.password;
  let profession = req.body.profession;

  result.user.push({
    id: result.user.length + 1,
    name: name,
    password: password,
    profession: profession,
  });

  res.send(result.user[result.user.length - 1]);
});

app.delete('/deleteUser', function (req, res) {
  let id = +req.body.id;

  result.user.forEach((user, index) => {
    if (user.id === id) {
      result.user.splice(index, 1);
    }
  });

  res.send('Ok');
});

app.use('/', express.static(path.join(__dirname, 'views')));
