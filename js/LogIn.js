// Code made by Max Vilà Ruiz

//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}



//Database:
let database;
if(localStorage.getItem('database')){
    database = JSON.parse(localStorage.getItem('database'));
} else{
    database = [''];
}



//Log in code:
const submit = document.querySelector('#submit');
let verify = true;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if(email.value !== '' & password.value !== ''){
        for (let i = 0; i < database.length; i++) {
            if (email.value === database[i][0] & password.value === database[i][1]) {
                localStorage.setItem('user_name', database[i][2]); //To put the name of the user in the 'Home' welcome.
                window.location.href = 'Home.html';
                verify = false;
                break;
            }
        }
        if (verify) {
            alert("El correu electrònic o la contrasenya no són correctes. Si us plau, torna-ho a intentar.\nSi has tingut algun error en iniciar sessió, notifica-ho al correu: 'maxvilaruiz123@gmail.com'.")
        }
    } else{
        alert('Has de completar tots els camps.');
    }
})