console.log('Hola mundo!')

// Info del enecabezado

let vecesActualizadas = 0

// Elementos del dom para acutalizar

let tbody = document.getElementById('tbody')
let spanUltimaActualizacion = document.getElementById('ultimaActualizacion')
let spanCantidadActualizaciones = document.getElementById('cantidadActualizaciones')

// Trabajando con la tabla

function clearTable(){
    tbody.innerHTML = '' 
}

function createRow(count, url, method){
    let newRow = tbody.insertRow()
    let newCell = newRow.insertCell()
    let newCell2 = newRow.insertCell()
    let newCell3 = newRow.insertCell()
    let newText = document.createTextNode(count)
    let newText2 = document.createTextNode(url)
    let newText3 = document.createTextNode(method)
    newCell.appendChild(newText)
    newCell2.appendChild(newText2)
    newCell3.appendChild(newText3)
}

function populateTable(arrayData){
    clearTable()
    arrayData.forEach(data => {
        const {count, url, method} = data
        createRow(count, url, method)
    })
}


// Trabajando con sockets con el servidor.

let socket = io()

socket.on('update', (data) => {
    console.log(data)
    populateTable(data)
    vecesActualizadas++

    spanCantidadActualizaciones.innerHTML = vecesActualizadas
    spanUltimaActualizacion.innerHTML = new Date().toLocaleString()
})