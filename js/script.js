// recupero gli elementi del dom 
const email = document.getElementById('emailList');

// creo una costante per l'api
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail'

// 10 email
const emails = []
for (let i = 0; i < 10; i++) {
  axios.get(apiUrl).then(function (resp) {
    emails.push(resp.data.response);
    console.log(email)
  });
}