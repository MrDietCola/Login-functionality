$('#login-btn').on('click', function (e) {
  e.preventDefault();
  const email = $('#email').val();
  const password = $('#password').val();
  const userInfo = {
    email: email,
    password: password,
  };
 login(userInfo);
})

$('#new-user-btn').on('click', function () {
  const username = $('#new-username').val();
  const email = $('#new-email').val();
  const password = $('#new-password').val();
  const newUser = {
    username: username,
    email: email,
    password: password
  };
  addUser(newUser);
})

const login = (userInfo) =>
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      if (data.message === 'You are now logged in!') {
        window.location.href = '/home';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

const addUser = (newUser) =>
    fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);;
      })
      .catch((error) => {
        console.error('Error:', error);
      });