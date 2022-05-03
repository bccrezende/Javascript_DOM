function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function EditItem(){
    item_clicado = this.parentElement
    valor_lista = item_clicado.textContent.replace("DeleteEdit","")
    document.querySelector('[data-form-input]').value = valor_lista;
    document.querySelector('[button-input]').classList.add("btn", "btn-danger", "d-none")
    document.querySelector('[button-edit]').classList.remove("d-none")

    console.log(valor_lista)

}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function CriarBotaoEdit(){
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-dark")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem);

    return botao_edit
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())

    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}

function Edit(){
    item_clicado.innerText = document.querySelector('[data-form-input]').value
    item_clicado.appendChild(CriarBotaoDelete())
    item_clicado.appendChild(CriarBotaoEdit())

    document.querySelector('[button-edit]').className = "btn btn-dark d-none"
    document.querySelector('[button-input]').classList.remove("d-none")
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
