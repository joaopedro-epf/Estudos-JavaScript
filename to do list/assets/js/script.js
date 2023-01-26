function adicionar(){
    var inptTask = document.querySelector('#inptTask')
    var task = inptTask.value
    var taskList = document.querySelector('#taskList')
    if (task == ''){
        alert ('Você precisa escrever qual tarefa deseja adicionar.')
    } else {   
        /* Cria um li */
        var listItem = document.createElement('li')

        /* Cria uma checkbox */    
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = 'checkbox'

        /* Função para riscar a tarefa quando checada */
        checkbox.onclick = function (){
            if (checkbox.checked){
                listItem.style.textDecoration ='line-through'
            } else {
                listItem.style.textDecoration = 'none'
            }
        }

        /* Adiciona a checkbox na pag */
        listItem.appendChild(checkbox)

        /* Adiciona a tarefa na pag */
        listItem.appendChild(document.createTextNode(task)) // Esse comando seria o que "escreve" a tarefa
        taskList.appendChild(listItem) // Adiciona o item de lista na pag
        taskList.style.listStyle = 'none' // Tira a bolinha que tem na lista


        /* Apaga a ultima tarefa adicionada no input, e foca novamente no input para adc outras tarefas */
        inptTask.value = ''
        inptTask.focus()
    }
}