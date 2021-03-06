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

    try{
        valor = document.querySelector('[data-form-input]').value
    }
    catch (error)
    {
        valor = ""
        console.log("campo input nao encontrado")
    }
    
    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";
    novo_item_lista.innerHTML = valor

    // precos = [["abacaxi", 2], ["banana", 4]]
    
    // for (preco in precos){
    //     if (precos[preco][0] == valor.value){
    //         console.log(precos[preco][1])
    //     }
    //     else{
    //         alert("Atenção, produto nao encontrado")
    //     }
    // }  
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



