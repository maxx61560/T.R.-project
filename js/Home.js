//To put the name of the user in the 'Home' welcome.
const span_name = document.querySelector('#span_name');
const valorLocalStorage = localStorage.getItem('user_name');

//Add name of Log in prefils.
if(valorLocalStorage){
    span_name.textContent = valorLocalStorage;
} else{
    span_name.textContent = '';
}



//Code of the main function (to create event):
var Row = null
function onSubmit() {
        let DataForm = Read()
        if (Row == null){
            InsertData(DataForm)
        } else{
            Update(DataForm)
            Empty()
    }
}
function Read() {
    let DataForm = {}
    DataForm["name"] = document.getElementById("name").value
    DataForm["date"] = document.getElementById("date").value
    DataForm["difficulty"] = document.getElementById("difficulty").value
    return DataForm
}
function InsertData(data) {
    let Board = document.getElementById("board").getElementsByTagName('tbody')[0]
    let Row = Board.insertRow(Board.length)
    column1 = Row.insertCell(0).innerHTML = data.name
    column2 = Row.insertCell(1).innerHTML = data.date
    column3 = Row.insertCell(2).innerHTML = data.difficulty
    column3 = Row.insertCell(3).innerHTML = `<input class="submit" type="button" onClick="Edit(this)" value="Edit" >
                                            <input class="submit" type="button" onClick="Delete(this)" value="Delete" >`
    document.getElementById("name").focus()
    Empty()
}
function Empty() {
    document.getElementById("name").value = ""
    document.getElementById("date").value = ""
    document.getElementById("difficulty").value = ""
    Row = null
}
function Edit(td) {
    Row = td.parentElement.parentElement
    document.getElementById("name").value = Row.cells[0].innerHTML
    document.getElementById("date").value = Row.cells[1].innerHTML
    document.getElementById("difficulty").value = Row.cells[2].innerHTML
}
function Update(DataForm) {
    Row.cells[0].innerHTML = DataForm.name
    Row.cells[1].innerHTML = DataForm.date
    Row.cells[2].innerHTML = DataForm.difficulty
    document.getElementById("name").focus()
}
function Delete(td) {
    if (confirm('¿Seguro de borrar este registro?')) { //Cambiar mensaje
        Row = td.parentElement.parentElement
        document.getElementById("board").deleteRow(Row.rowIndex)
        Empty()
    }
}