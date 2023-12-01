//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}


// Funcions of EventPage:

// To obtain the parameters of the localStorage vars:
function obtainParametersURL() {
    const parameters = {};
    const queryString = window.location.search.substring(1); // Excluye el "?"
    const pares = queryString.split('&');
  
    for (const par of pares) {
      const [name, value] = par.split('=');
      parameters[name] = value;
    }
  
    return parameters;
  }
const parametersURL = obtainParametersURL();

let arrayExamens;
let arrayProjectes;
let arrayDeures;
let name;
let date;
let difficulty;
let id = parametersURL.id;
let type = parametersURL.type;
if(parametersURL.type === 'e'){
    if(localStorage.getItem('arrayExamens')){
        arrayExamens = JSON.parse(localStorage.getItem('arrayExamens'));
        arrayExamens.forEach((elem) => {
            if(elem.id === parseInt(parametersURL.id)){
                name = elem.name;
                date = elem.date;
                difficulty = elem.difficulty;
                description = elem.description;
            }
        });
    }
} else if(parametersURL.type === 'p'){
    if(localStorage.getItem('arrayProjectes')){
        arrayProjectes = JSON.parse(localStorage.getItem('arrayProjectes'));
        arrayProjectes.forEach((elem) => {
            if(elem.id === parseInt(parametersURL.id)){
                name = elem.name;
                date = elem.date;
                difficulty = elem.difficulty;
                description = elem.description;
            }
        });
    }
} else if(parametersURL.type === 'd'){
    if(localStorage.getItem('arrayDeures')){
        arrayDeures = JSON.parse(localStorage.getItem('arrayDeures'));
        arrayDeures.forEach((elem) => {
            if(elem.id === parseInt(parametersURL.id)){
                name = elem.name;
                date = elem.date;
                difficulty = elem.difficulty;
                description = elem.description;
            }
        });
    }
}

document.getElementById('name').innerHTML = name;
document.getElementById('date').innerHTML = date;
document.getElementById('difficulty').innerHTML = difficulty;
document.getElementById('description').innerHTML = description;

function save() {
    let description = document.getElementById('description').value;
    if (parametersURL.type === 'e') {
        console.log('si');
        arrayExamens.forEach((elem) => {
            if (elem.id === parseInt(parametersURL.id)) {
                elem.description = description;
            }
        });
        localStorage.setItem('arrayExamens', JSON.stringify(arrayExamens));
    } else if (parametersURL.type === 'p') {
        arrayProjectes.forEach((elem) => {
            if (elem.id === parseInt(parametersURL.id)) {
                elem.description = description;
            }
        });
        localStorage.setItem('arrayProjectes', JSON.stringify(arrayProjectes));
    } else if (parametersURL.type === 'd') {
        arrayDeures.forEach((elem) => {
            if (elem.id === parseInt(parametersURL.id)) {
                elem.description = description;
            }
        });
        localStorage.setItem('arrayDeures', JSON.stringify(arrayDeures));
    }
}