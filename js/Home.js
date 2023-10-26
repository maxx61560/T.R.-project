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
const defaultEvent = {};
defaultEvent["difficulty"] = "Fàcil";
defaultEvent["name"] = "Exemple d'esdeveniment";
defaultEvent["date"] = "dd/mm/aaaa";
InsertData(defaultEvent);

//Button to show the form to create event:
function show_formNewEvent() {
    document.getElementById('button_createEvent').style.display = 'block';
}

// To create events:
var Row = null
function onSubmit() {
        let DataForm = Read();
        if (Row === null){
            InsertData(DataForm);
        } else{
            Update(DataForm);
            Empty();
    }
}
function Read() {
    let DataForm = {};
    DataForm["difficulty"] = document.getElementById("difficulty").value;
    DataForm["name"] = document.getElementById("name").value;
    DataForm["date"] = document.getElementById("date").value;
    return DataForm;
}
function InsertData(data) {
    let Table = document.getElementById("table").getElementsByTagName('tbody')[0];
    let Row = Table.insertRow(Table.length);
    column1 = Row.insertCell(0).innerHTML = data.difficulty;
    column2 = Row.insertCell(1).innerHTML = data.name;
    column3 = Row.insertCell(2).innerHTML = data.date;
    column3 = Row.insertCell(3).innerHTML = `<input class="submit optionsTable_home edit_home" onClick="Edit(this)" type="image" src="/img/edit.jpg">
                                            <input class="submit optionsTable_home delete_home" onClick="Delete(this)" type="image" src="/img/delete.jpg">`;
    document.getElementById("difficulty").focus();
    Empty();
}
function Empty() {
    document.getElementById("difficulty").value = "";
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    Row = null;
}
function Edit(td) {
    Row = td.parentElement.parentElement;
    document.getElementById("difficulty").value = Row.cells[0].innerHTML;
    document.getElementById("name").value = Row.cells[1].innerHTML;
    document.getElementById("date").value = Row.cells[2].innerHTML;
}
function Update(DataForm) {
    Row.cells[0].innerHTML = DataForm.difficulty;
    Row.cells[1].innerHTML = DataForm.name;
    Row.cells[2].innerHTML = DataForm.date;
    document.getElementById("difficulty").focus();
}
function Delete(td) {
    if (confirm('Segur que vols eliminar aquest esdeveniment?')) {
        Row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(Row.rowIndex);
        Empty();
    }
}