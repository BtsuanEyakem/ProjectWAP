document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    window.location.href = 'songs.html'
  
    // fetch('http://localhost:3000/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ username, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.token) {
    //     sessionStorage.setItem('token', data.token);
    //    // window.location.href = 'songs.html';
    //   } else {
    //     document.getElementById('errorMessage').innerText = 'Error';
    //   }
    // })
    // .catch(error => console.error('Error:', error));
  });
  