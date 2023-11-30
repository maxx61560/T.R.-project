//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}



function obtenerParametrosDeURL() {
    const parametros = {};
    const queryString = window.location.search.substring(1); // Excluye el "?"
    const pares = queryString.split('&');
  
    for (const par of pares) {
      const [nombre, valor] = par.split('=');
      parametros[nombre] = valor;
    }
  
    return parametros;
  }
  
  // Ejemplo de uso:
  const parametrosURL = obtenerParametrosDeURL();

let arrayExamens;
let name;
let date;
let difficulty;
let id = parametrosURL.id;
let type = parametrosURL.type;
console.log(id, type);
if(parametrosURL.type === 'e'){
    if(localStorage.getItem('arrayExamens')){
        arrayExamens = JSON.parse(localStorage.getItem('arrayExamens'));
        arrayExamens.forEach((elem) => {
            if(elem.id === parseInt(parametrosURL.id)){
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

function save(){
    let description = document.getElementById('description').value;
    arrayExamens.forEach((elem) => {
        if(elem.id === parseInt(parametrosURL.id)){
            elem.description = description;
        }
    });
    localStorage.setItem('arrayExamens', JSON.stringify(arrayExamens));
}