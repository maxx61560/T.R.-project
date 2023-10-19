//Code made by Max Vilà Ruiz

//Database:
const database = [['maxvilaruiz123@gmail.com', 'Exemple', 'Max']];


//Register code:
const submit = document.querySelector('#submit');
let verify_email = false;
let verify_pw = false;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let password2 = document.querySelector('#password2');
    let result = `, ['${email.value}', '${password.value}', '${name.value}']`;
    for(let i = 0; i < database.length; i++){
        if(email.value !== database[i][0]){
            if(password.value === password2.value){
                alert(`Perfecte! Per acabar, envia la següent informació al correu electrònic 'maxvilaruiz123@gmail.com': \n\n${result}`);
                localStorage.setItem('name', name.value); //To put the name of the user in the 'Home' welcome.
                window.location.href = 'Home.html';
                break;
            } else{
                verify_pw = true;
            }
        } else{
            verify_email = true;
        }
    }
    if(verify_email){
        alert("Aquest correu electrònic ja està en ús, si us plau prova amb un altre.");
    } else if(verify_pw){
        alert('Les contrasenyes no coincideixen, si us plau torna-ho a intentar.');
    }
})