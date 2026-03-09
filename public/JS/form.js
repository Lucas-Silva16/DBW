"use strict"

const submitButton=document.getElementById("submitButton");

const fields = {
    name: document.getElementById("nameInput"),
    email: document.getElementById("emailInput"),
    comment: document.getElementById("messageTextarea")
};

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    validar();

});

function validar(){
    let isValid=true;
    
    for(const key in fields){
        
        const input = fields[key];
        const value = input.value.trim();

    if(verificacaoIndividual(input)===false){
        isValid=false;
        input.classList.add("is-invalid")
    }else{
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
    }
    }

    if(!isValid){
        console.log("Preencha o formulario!")
    } else{
        console.log("Formulario enviado com sucesso!")
        const nome=fields.name.value.trim();
        const email=fields.email.value.trim();
        const comment = fields.comment.value.trim();

        const novoHTML=construirCom(nome,email,comment);
        inserirCom(novoHTML);

        resetForm();

    }

    return isValid;
}

function verificacaoIndividual(input) {
    let isValid = true;
    const value = input.value.trim();

    if (value === "") {
        isValid = false;
    } 
    else if (input.id === 'emailInput') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    return isValid;
}

function resetForm(){
    document.getElementById("commentForm").reset();
}

function construirCom(nome, email, comment) {
    const nomeSeguro = sanitizar(nome);
    const emailSeguro = sanitizar(email);
    const commentSeguro = sanitizar(comment);

    return `<div class="comentario">
                <h3>Nome: ${nomeSeguro} | Email: ${emailSeguro}</h3>
                <p>Mensagem: ${commentSeguro}</p> 
            </div>`;
}

function inserirCom(cardHTML){

    const container =document.getElementById("commentsSection")
    container.insertAdjacentHTML('beforeend', cardHTML);

}

function sanitizar(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}