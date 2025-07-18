// recupero gli elementi del dom 
const email = document.getElementById('emailList');

// creo una costante per l'api
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail'

// 10 email
const loadEmails = function () {
  for (let i = 0; i < 10; i++) {
    axios.get(apiUrl)
      .then(function (resp) {
        email.innerHTML += `<li>${resp.data.response}</li>`;
        console.log(resp.data.response)
      });
  }
}

// bottone
const button = document.getElementById('addEmail');

button.addEventListener('click', function (e) {
  e.preventDefault();

  email.innerHTML = '';

  loadEmails();
});
loadEmails();