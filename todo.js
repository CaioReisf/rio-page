function adcionartarefa(){
    let inTaf = document.getElementById('intaf').value
    let tarefa = document.createElement('li')
    let cancelar = document.createElement('span')
    tarefa.textContent= inTaf + cancelar
    document.getElementById('outres').appendChild(tarefa)
}

let btnad = document.getElementById('btnad').addEventListener("click",adcionartarefa)