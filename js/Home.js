// Function button 'help':
function help(){
    alert("Ajuda'ns a millorar! \nSi tens algun problema amb l'aplicatiu o has trobat algun error en el sistema, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
}

// To recover the old contents:
let arrayExamens;
if(localStorage.getItem('arrayExamens')){
    arrayExamens = JSON.parse(localStorage.getItem('arrayExamens'));
    arrayExamens.forEach((elem) => {
        Existing1(elem);
    })
} else {
    arrayExamens = [];
    const defaultEvent1 = {};
    defaultEvent1['difficulty1'] = 'Fàcil';
    defaultEvent1['name1'] = "Examen d'exemple";
    defaultEvent1['date1'] = 'dd/mm/aaaa';
    defaultEvent1['isdefault'] = true;
    defaultEvent1['id1'] = 1;
    defaultEvent1['description1'] = '';
    InsertData1(defaultEvent1);
}

let arrayProjectes;
if(localStorage.getItem('arrayProjectes')){
    arrayProjectes = JSON.parse(localStorage.getItem('arrayProjectes'));
    arrayProjectes.forEach((elem) => {
        Existing2(elem);
    })
} else {
    arrayProjectes = [];
    const defaultEvent2 = {};
    defaultEvent2['difficulty2'] = 'Mig';
    defaultEvent2['name2'] = "Projecte d'exemple";
    defaultEvent2['date2'] = 'dd/mm/aaaa';
    defaultEvent2['isdefault'] = true;
    defaultEvent2['id2'] = 2;
    defaultEvent2['description2'] = '';
    InsertData2(defaultEvent2);
}

let arrayDeures;
if(localStorage.getItem('arrayDeures')){
    arrayDeures = JSON.parse(localStorage.getItem('arrayDeures'));
    arrayDeures.forEach((elem) => {
        Existing3(elem);
    })
} else {
    arrayDeures = [];
    const defaultEvent3 = {};
    defaultEvent3['difficulty3'] = 'Difícil';
    defaultEvent3['name3'] = "Tasca d'exemple";
    defaultEvent3['date3'] = 'dd/mm/aaaa';
    defaultEvent3['isdefault'] = true;
    defaultEvent3['id3'] = 3;
    defaultEvent3['description3'] = '';
    InsertData3(defaultEvent3);
}




//To put the name of the user in the 'Home' welcome.

const span_name = document.querySelector('#span_name');
const valorLocalStorage = localStorage.getItem('user_name');

if(valorLocalStorage){
    span_name.textContent = valorLocalStorage;
} else{
    span_name.textContent = '';
}




//Code of the main function (table):

//Function that show and hide the sections contents of 'Home':
function visibilitySections(elem) {
    if(elem === 'examens'){
        let sectionName1 = document.getElementById('sectionName1');
        if(sectionName1.innerHTML === "▶ Exàmens"){
            document.getElementById('sectionContent_visibility1').style.display = 'block';
            sectionName1.innerHTML = "▼ Exàmens";
        } else if(sectionName1.innerHTML == "▼ Exàmens"){
            document.getElementById('sectionContent_visibility1').style.display = 'none';
            sectionName1.innerHTML = "▶ Exàmens";
        }
    } else if(elem === 'projectes'){
        let sectionName2 = document.getElementById('sectionName2');
        if(sectionName2.innerHTML === "▶ Projectes"){
            document.getElementById('sectionContent_visibility2').style.display = 'block';
            sectionName2.innerHTML = "▼ Projectes";
        } else if(sectionName2.innerHTML == "▼ Projectes"){
            document.getElementById('sectionContent_visibility2').style.display = 'none';
            sectionName2.innerHTML = "▶ Projectes";
        }
    } else if(elem === 'deures'){
        let sectionName3 = document.getElementById('sectionName3');
        if(sectionName3.innerHTML === "▶ Deures"){
            document.getElementById('sectionContent_visibility3').style.display = 'block';
            sectionName3.innerHTML = "▼ Deures";
        } else if(sectionName3.innerHTML == "▼ Deures"){
            document.getElementById('sectionContent_visibility3').style.display = 'none';
            sectionName3.innerHTML = "▶ Deures";
        }
    }
}


//Functions that show and hide the form to create new event:
function show_addEvent(elem) {
    if(elem === 'examens'){
        document.getElementById('eventContent_visibility1').style.display = 'block';
        document.getElementById('showForm1').style.display = 'none';
        document.getElementById('hideForm1').style.display = 'block';
        let submit_name = document.getElementById('submit1');
        submit_name.innerHTML = 'Crear';
        Empty1();
    } else if(elem === 'projectes'){
        document.getElementById('eventContent_visibility2').style.display = 'block';
        document.getElementById('showForm2').style.display = 'none';
        document.getElementById('hideForm2').style.display = 'block';
        let submit_name = document.getElementById('submit2');
        submit_name.innerHTML = 'Crear';
        Empty2();
    } else if(elem === 'deures'){
        document.getElementById('eventContent_visibility3').style.display = 'block';
        document.getElementById('showForm3').style.display = 'none';
        document.getElementById('hideForm3').style.display = 'block';
        let submit_name = document.getElementById('submit3');
        submit_name.innerHTML = 'Crear';
        Empty3();
    }
}
function hide_addEvent(elem) {
    if(elem === 'examens'){
        document.getElementById('eventContent_visibility1').style.display = 'none';
        document.getElementById('showForm1').style.display = 'block';
        document.getElementById('hideForm1').style.display = 'none';
    } else if(elem === 'projectes'){
        document.getElementById('eventContent_visibility2').style.display = 'none';
        document.getElementById('showForm2').style.display = 'block';
        document.getElementById('hideForm2').style.display = 'none';
    } else if(elem === 'deures'){
        document.getElementById('eventContent_visibility3').style.display = 'none';
        document.getElementById('showForm3').style.display = 'block';
        document.getElementById('hideForm3').style.display = 'none';
    }
}


// For create events:
var Row1 = null
var Row2 = null
var Row3 = null
function onSubmit(elem) {
    if(elem === 'examens'){
        let DataForm1 = Read1();
        if (Row1 === null){
            InsertData1(DataForm1);
        } else{
            Update1(DataForm1);
            Empty1();
        }
    } else if(elem === 'projectes'){
        let DataForm2 = Read2();
        if (Row2 === null){
            InsertData2(DataForm2);
        } else{
            Update2(DataForm2);
            Empty2();
        }
    } else if(elem === 'deures'){
        let DataForm3 = Read3();
        if (Row3 === null){
            InsertData3(DataForm3);
        } else{
            Update3(DataForm3);
            Empty3();
        }
    }
}

function Read1() {
    let DataForm1 = {};
    DataForm1['difficulty1'] = document.getElementById('difficulty1').value;
    DataForm1['name1'] = document.getElementById('name1').value;
    DataForm1['date1'] = document.getElementById('date1').value;
    return DataForm1;
}
function Read2() {
    let DataForm2 = {};
    DataForm2['difficulty2'] = document.getElementById('difficulty2').value;
    DataForm2['name2'] = document.getElementById('name2').value;
    DataForm2['date2'] = document.getElementById('date2').value;
    return DataForm2;
}
function Read3() {
    let DataForm3 = {};
    DataForm3['difficulty3'] = document.getElementById('difficulty3').value;
    DataForm3['name3'] = document.getElementById('name3').value;
    DataForm3['date3'] = document.getElementById('date3').value;
    return DataForm3;
}


function Existing1(data){
    let Table = document.getElementById('table1').getElementsByTagName('tbody')[0];
    let Row1 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty;

    column1 = Row1.insertCell(0).appendChild(difficulty);
    column2 = Row1.insertCell(1).innerHTML = data.name;
    column3 = Row1.insertCell(2).innerHTML = data.date;
    column3 = Row1.insertCell(3).innerHTML =
    `<input class="optionsTable_home edit_home" onClick="Edit1(this, ${data.id})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete1(this, ${data.id})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${data.id}&type=e">ver más</a>`;
    document.getElementById('difficulty1').focus();
}
function Existing2(data){
    let Table = document.getElementById('table2').getElementsByTagName('tbody')[0];
    let Row2 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty;

    column2 = Row2.insertCell(0).appendChild(difficulty);
    column2 = Row2.insertCell(1).innerHTML = data.name;
    column3 = Row2.insertCell(2).innerHTML = data.date;
    column3 = Row2.insertCell(3).innerHTML = 
    `<input class="optionsTable_home edit_home" onClick="Edit2(this, ${data.id})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete2(this, ${data.id})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${data.id}&type=p">ver más</a>`;
    document.getElementById('difficulty2').focus();
}
function Existing3(data){
    let Table = document.getElementById('table3').getElementsByTagName('tbody')[0];
    let Row3 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty;

    column3 = Row3.insertCell(0).appendChild(difficulty);
    column2 = Row3.insertCell(1).innerHTML = data.name;
    column3 = Row3.insertCell(2).innerHTML = data.date;
    column3 = Row3.insertCell(3).innerHTML = 
    `<input class="optionsTable_home edit_home" onClick="Edit3(this, ${data.id})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete3(this, ${data.id})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${data.id}&type=d">ver más</a>`;
    document.getElementById('difficulty3').focus();
}


function InsertData1(data) {
    let Table = document.getElementById('table1').getElementsByTagName('tbody')[0];
    let Row1 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty1 === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty1 === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty1 === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty1;

    column1 = Row1.insertCell(0).appendChild(difficulty);
    column2 = Row1.insertCell(1).innerHTML = data.name1;
    column3 = Row1.insertCell(2).innerHTML = data.date1;
    column3 = Row1.insertCell(3).innerHTML =
    `<input class="optionsTable_home edit_home" onClick="Edit1(this, ${arrayExamens.length + 1})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete1(this, ${arrayExamens.length + 1})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${arrayExamens.length + 1}&type=e">ver más</a>`;
    document.getElementById('difficulty1').focus();

    arrayExamens.push({
        difficulty: data.difficulty1,
        name: data.name1,
        date: data.date1,
        id: arrayExamens.length + 1,
        isdefault: data.isdefault,
        description: ''
    });
    localStorage.setItem('arrayExamens', JSON.stringify(arrayExamens));

    Empty1();
}
function InsertData2(data) {
    let Table = document.getElementById('table2').getElementsByTagName('tbody')[0];
    let Row2 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty2 === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty2 === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty2 === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty2;

    column2 = Row2.insertCell(0).appendChild(difficulty);
    column2 = Row2.insertCell(1).innerHTML = data.name2;
    column3 = Row2.insertCell(2).innerHTML = data.date2;
    column3 = Row2.insertCell(3).innerHTML = 
    `<input class="optionsTable_home edit_home" onClick="Edit2(this, ${arrayProjectes.length + 1})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete2(this, ${arrayProjectes.length + 1})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${arrayProjectes.length + 1}&type=p">ver más</a>`;
    document.getElementById('difficulty2').focus();

    arrayProjectes.push({
        difficulty: data.difficulty2,
        name: data.name2,
        date: data.date2,
        id: arrayProjectes.length + 1,
        isdefault: data.isdefault,
        description: ''
    });
    localStorage.setItem('arrayProjectes', JSON.stringify(arrayProjectes));

    Empty2();
}
function InsertData3(data) {
    let Table = document.getElementById('table3').getElementsByTagName('tbody')[0];
    let Row3 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty3 === "Fàcil"){
        difficulty.style.backgroundColor = '#54B435';
    } else if(data.difficulty3 === "Mig"){
        difficulty.style.backgroundColor = 'orange';
    } else if(data.difficulty3 === "Difícil"){
        difficulty.style.backgroundColor = 'red';
    }
    difficulty.textContent = data.difficulty3;

    column3 = Row3.insertCell(0).appendChild(difficulty);
    column2 = Row3.insertCell(1).innerHTML = data.name3;
    column3 = Row3.insertCell(2).innerHTML = data.date3;
    column3 = Row3.insertCell(3).innerHTML = 
    `<input class="optionsTable_home edit_home" onClick="Edit3(this, ${arrayDeures.length + 1})" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete3(this, ${arrayDeures.length + 1})" type="image" src="/img/delete.jpg">
    <a class="optionsTable_home" href="/EventPage.html?id=${arrayDeures.length + 1}&type=d">ver más</a>`;
    document.getElementById('difficulty3').focus();

    arrayDeures.push({
        difficulty: data.difficulty3,
        name: data.name3,
        date: data.date3,
        id: arrayDeures.length + 1,
        isdefault: data.isdefault,
        description: ''
    });
    localStorage.setItem('arrayDeures', JSON.stringify(arrayDeures));

    Empty3();
}


function Empty1() {
    document.getElementById('difficulty1').value = "";
    document.getElementById('name1').value = "";
    document.getElementById('date1').value = "";
    Row1 = null;
}
function Empty2() {
    document.getElementById('difficulty2').value = "";
    document.getElementById('name2').value = "";
    document.getElementById('date2').value = "";
    Row2 = null;
}
function Empty3() {
    document.getElementById('difficulty3').value = "";
    document.getElementById('name3').value = "";
    document.getElementById('date3').value = "";
    Row3 = null;
}


function Edit1(td, id) {
    show_addEvent('examens');
    Row1 = td.parentElement.parentElement;

    document.getElementById('difficulty1').value = Row1.cells[0].innerHTML;
    document.getElementById('name1').value = Row1.cells[1].innerHTML;
    document.getElementById('date1').value = Row1.cells[2].innerHTML;

    let submit_name = document.getElementById('submit1');
    submit_name.innerHTML = 'Actualitzar';

    document.getElementById('idExamens').value = id;
}
function Edit2(td, id) {
    show_addEvent('projectes');
    Row2 = td.parentElement.parentElement;
    document.getElementById('difficulty2').value = Row2.cells[0].innerHTML;
    document.getElementById('name2').value = Row2.cells[1].innerHTML;
    document.getElementById('date2').value = Row2.cells[2].innerHTML;

    let submit_name = document.getElementById('submit2');
    submit_name.innerHTML = 'Actualitzar';

    document.getElementById('idProjectes').value = id;
}
function Edit3(td, id) {
    show_addEvent('deures');
    Row3 = td.parentElement.parentElement;
    document.getElementById('difficulty3').value = Row3.cells[0].innerHTML;
    document.getElementById('name3').value = Row3.cells[1].innerHTML;
    document.getElementById('date3').value = Row3.cells[2].innerHTML;

    let submit_name = document.getElementById('submit3');
    submit_name.innerHTML = 'Actualitzar';

    document.getElementById('idDeures').value = id;
}


function Update1(DataForm1) {
    let bgcolor = '';
    if(DataForm1.difficulty1 === "Fàcil"){
        bgcolor = '#54B435';
    } else if(DataForm1.difficulty1 === "Mig"){
        bgcolor = 'orange';
    } else if(DataForm1.difficulty1 === "Difícil"){
        bgcolor = 'red';
    }

    Row1.cells[0].innerHTML = "<span style='background-color: "+bgcolor+";'>"+DataForm1.difficulty1+"</span>";
    Row1.cells[1].innerHTML = DataForm1.name1;
    Row1.cells[2].innerHTML = DataForm1.date1;
    document.getElementById('difficulty1').focus();

    let id = parseInt(document.getElementById('idExamens').value);
    arrayExamens.forEach((elem) => {
        if(elem.id === id){
            elem.difficulty = DataForm1.difficulty1;
            elem.name = DataForm1.name1;
            elem.date = DataForm1.date1;
        }
    })
    localStorage.setItem('arrayExamens', JSON.stringify(arrayExamens));
}
function Update2(DataForm2) {
    let bgcolor = '';
    if(DataForm2.difficulty2 === "Fàcil"){
        bgcolor = '#54B435';
    } else if(DataForm2.difficulty2 === "Mig"){
        bgcolor = 'orange';
    } else if(DataForm2.difficulty2 === "Difícil"){
        bgcolor = 'red';
    }

    Row2.cells[0].innerHTML = "<span style='background-color: "+bgcolor+";'>"+DataForm2.difficulty2+"</span>";
    Row2.cells[1].innerHTML = DataForm2.name2;
    Row2.cells[2].innerHTML = DataForm2.date2;
    document.getElementById('difficulty2').focus();

    let id = parseInt(document.getElementById('idProjectes').value);
    arrayProjectes.forEach((elem) => {
        if(elem.id === id){
            elem.difficulty = DataForm2.difficulty2;
            elem.name = DataForm2.name2;
            elem.date = DataForm2.date2;
        }
    })
    localStorage.setItem('arrayProjectes', JSON.stringify(arrayProjectes));
}
function Update3(DataForm3) {
    let bgcolor = '';
    if(DataForm3.difficulty3 === "Fàcil"){
        bgcolor = '#54B435';
    } else if(DataForm3.difficulty3 === "Mig"){
        bgcolor = 'orange';
    } else if(DataForm3.difficulty3 === "Difícil"){
        bgcolor = 'red';
    }

    Row3.cells[0].innerHTML = "<span style='background-color: "+bgcolor+";'>"+DataForm3.difficulty3+"</span>";
    Row3.cells[1].innerHTML = DataForm3.name3;
    Row3.cells[2].innerHTML = DataForm3.date3;
    document.getElementById('difficulty3').focus();

    let id = parseInt(document.getElementById('idDeures').value);
    arrayDeures.forEach((elem) => {
        if(elem.id === id){
            elem.difficulty = DataForm3.difficulty3;
            elem.name = DataForm3.name3;
            elem.date = DataForm3.date3;
        }
    })
    localStorage.setItem('arrayDeures', JSON.stringify(arrayDeures));
}


function Delete1(td, id) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row1 = td.parentElement.parentElement;
        document.getElementById('table1').deleteRow(Row1.rowIndex);
        Empty1();

        arrayExamens.forEach((elem, index) => {
            if(parseInt(elem.id) === parseInt(id)){
                arrayExamens.splice(index, 1);
                localStorage.setItem('arrayExamens', JSON.stringify(arrayExamens));
            }
        })
    }
}
function Delete2(td, id) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row2 = td.parentElement.parentElement;
        document.getElementById('table2').deleteRow(Row2.rowIndex);
        Empty2();

        arrayProjectes.forEach((elem, index) => {
            if(parseInt(elem.id) === parseInt(id)){
                arrayProjectes.splice(index, 1);
                localStorage.setItem('arrayProjectes', JSON.stringify(arrayProjectes));
            }
        })
    }
}
function Delete3(td, id) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row3 = td.parentElement.parentElement;
        document.getElementById('table3').deleteRow(Row3.rowIndex);
        Empty3();

        arrayDeures.forEach((elem, index) => {
            if(parseInt(elem.id) === parseInt(id)){
                arrayDeures.splice(index, 1);
                localStorage.setItem('arrayDeures', JSON.stringify(arrayDeures));
            }
        })
    }
}