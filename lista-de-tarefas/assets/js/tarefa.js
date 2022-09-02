const novatarefa = document.querySelector('[data-form-button]')

novatarefa.addEventListener('click',(evento) =>{
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const valor = input.value
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(botao())
    
    lista.appendChild(tarefa)
    input.value = ""
    
})

const botao = () =>{
    const botaoconclui = document.createElement('button')
    botaoconclui.innerHTML = 'concluir'
    botaoconclui.addEventListener('click',() =>{
        console.log("Fui clicado!")
    })
    return botaoconclui
}