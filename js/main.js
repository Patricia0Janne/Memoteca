import ui from "./ui.js"
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formulario = document.getElementById("pensamento-form")
    const botaoCancelar = document.getElementById("botao-cancelar")

    formulario.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", acionarCancelamento)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try{
         if(id){
             await api.editarPensamentos({id, conteudo, autoria});
         }else{
            await api.salvarPensamentos({conteudo, autoria});

         }
        ui.renderizarPensamentos();
    }
    catch(error){
        alert("erro ao salvar pensamento");
    }
}

function acionarCancelamento() {
    ui.limparFormulario()
    
}