//Global functions:
function help(){
    alert("Ajuda'ns a millorar! \nSi trobes algun problema a l'aplicatiu, fes-nos-ho saber al següent correu electrònic:    'maxvilaruiz123@gmail.com'. \n\nMoltes gràcies.")
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

//Default event:
const defaultEvent1 = {};
defaultEvent1['difficulty1'] = 'Fàcil';
defaultEvent1['name1'] = "Examen d'exemple";
defaultEvent1['date1'] = 'dd/mm/aaaa';
InsertData1(defaultEvent1);

const defaultEvent2 = {};
defaultEvent2['difficulty2'] = 'Mig';
defaultEvent2['name2'] = "Projecte d'exemple";
defaultEvent2['date2'] = 'dd/mm/aaaa';
InsertData2(defaultEvent2);

const defaultEvent3 = {};
defaultEvent3['difficulty3'] = 'Difícil';
defaultEvent3['name3'] = "Tasca d'exemple";
defaultEvent3['date3'] = 'dd/mm/aaaa';
InsertData3(defaultEvent3);


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

function InsertData1(data) {
    let Table = document.getElementById('table1').getElementsByTagName('tbody')[0];
    let Row1 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty1 === "Fàcil"){
        difficulty.style.backgroundColor = 'green';
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
    `<input class="optionsTable_home edit_home" onClick="Edit1(this)" type="image" src="/img/edit.jpg">
    <input class="optionsTable_home delete_home" onClick="Delete1(this)" type="image" src="/img/delete.jpg">`;
    document.getElementById('difficulty1').focus();
    Empty1();
}
function InsertData2(data) {
    let Table = document.getElementById('table2').getElementsByTagName('tbody')[0];
    let Row2 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty2 === "Fàcil"){
        difficulty.style.backgroundColor = 'green';
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
    `<input class="submit optionsTable_home edit_home" onClick="Edit2(this)" type="image" src="/img/edit.jpg">
    <input class="submit optionsTable_home delete_home" onClick="Delete2(this)" type="image" src="/img/delete.jpg">`;
    document.getElementById('difficulty2').focus();
    Empty2();
}
function InsertData3(data) {
    let Table = document.getElementById('table3').getElementsByTagName('tbody')[0];
    let Row3 = Table.insertRow(Table.length);
    let difficulty = document.createElement('difficulty');

    if(data.difficulty3 === "Fàcil"){
        difficulty.style.backgroundColor = 'green';
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
    `<input class="submit optionsTable_home edit_home" onClick="Edit3(this)" type="image" src="/img/edit.jpg">
    <input class="submit optionsTable_home delete_home" onClick="Delete3(this)" type="image" src="/img/delete.jpg">`;
    document.getElementById('difficulty3').focus();
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


function Edit1(td) {
    show_addEvent('examens');
    Row1 = td.parentElement.parentElement;
    document.getElementById('difficulty1').value = Row1.cells[0].innerHTML;
    document.getElementById('name1').value = Row1.cells[1].innerHTML;
    document.getElementById('date1').value = Row1.cells[2].innerHTML;

    let submit_name = document.getElementById('submit1');
    submit_name.innerHTML = 'Actualitzar';
}
function Edit2(td) {
    show_addEvent('projectes');
    Row2 = td.parentElement.parentElement;
    document.getElementById('difficulty2').value = Row2.cells[0].innerHTML;
    document.getElementById('name2').value = Row2.cells[1].innerHTML;
    document.getElementById('date2').value = Row2.cells[2].innerHTML;

    let submit_name = document.getElementById('submit2');
    submit_name.innerHTML = 'Actualitzar';
}
function Edit3(td) {
    show_addEvent('deures');
    Row3 = td.parentElement.parentElement;
    document.getElementById('difficulty3').value = Row3.cells[0].innerHTML;
    document.getElementById('name3').value = Row3.cells[1].innerHTML;
    document.getElementById('date3').value = Row3.cells[2].innerHTML;

    let submit_name = document.getElementById('submit3');
    submit_name.innerHTML = 'Actualitzar';
}


function Update1(DataForm1) {
    // let difficulty = document.createElement('difficulty');

    // if(DataForm1.difficulty1 === "Fàcil"){
    //     difficulty.style.backgroundColor = 'green';
    // } else if(DataForm1.difficulty1 === "Mig"){
    //     difficulty.style.backgroundColor = 'orange';
    // } else if(DataForm1.difficulty1 === "Difícil"){
    //     difficulty.style.backgroundColor = 'red';
    // }
    // difficulty.textContent = DataForm1.difficulty1;
    // column1 = Row1.appendChild(difficulty);

    Row1.cells[0].innerHTML = DataForm1.difficulty1;
    Row1.cells[1].innerHTML = DataForm1.name1;
    Row1.cells[2].innerHTML = DataForm1.date1;

    document.getElementById('difficulty1').focus();
}
function Update2(DataForm2) {
    Row2.cells[0].innerHTML = DataForm2.difficulty2;
    Row2.cells[1].innerHTML = DataForm2.name2;
    Row2.cells[2].innerHTML = DataForm2.date2;
    document.getElementById('difficulty2').focus();
}
function Update3(DataForm3) {
    Row3.cells[0].innerHTML = DataForm3.difficulty3;
    Row3.cells[1].innerHTML = DataForm3.name3;
    Row3.cells[2].innerHTML = DataForm3.date3;
    document.getElementById('difficulty3').focus();
}


function Delete1(td) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row1 = td.parentElement.parentElement;
        document.getElementById('table1').deleteRow(Row1.rowIndex);
        Empty1();
    }
}
function Delete2(td) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row2 = td.parentElement.parentElement;
        document.getElementById('table2').deleteRow(Row2.rowIndex);
        Empty2();
    }
}
function Delete3(td) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row3 = td.parentElement.parentElement;
        document.getElementById('table3').deleteRow(Row3.rowIndex);
        Empty3();
    }
}