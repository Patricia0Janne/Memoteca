import api from './api.js';

const ui = {

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo
        document.getElementById("pensamento-autoria").value = pensamento.autoria
    },

    limparFormulario() {
         document.getElementById("pensamento-form").reset();
       
    },

    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos")
        listaPensamentos.innerHTML = "";
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.adicionarPensamento)
        }
        catch {
            alert("Erro ao renderizar pensamentos")
        }
    },

    adicionarPensamento(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos")
        const li = document.createElement("li")
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas azuis"
        iconeAspas.classList.add("icone-aspas")

        const conteudo = document.createElement("div")
        conteudo.textContent = pensamento.conteudo
        conteudo.classList.add("pensamento-conteudo")


        const autoria = document.createElement("div")
        autoria.textContent = pensamento.autoria
        autoria.classList.add("pensamento-autoria")

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id)

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"
        iconeEditar.alt = "Icone editar"
        botaoEditar.appendChild(iconeEditar)

        const botaoDeletar = document.createElement("button")
        botaoDeletar.classList.add("botao-excluir")
        botaoDeletar.onclick = () => api.excluirPensamento(pensamento.id)

        const iconeDeletar = document.createElement("img")
        iconeDeletar.src = "assets/imagens/icone-excluir.png"
        iconeDeletar.alt = "Icone Deletar"
        botaoDeletar.appendChild(iconeDeletar)

        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.appendChild(botaoEditar)
        icones.appendChild(botaoDeletar)

        li.appendChild(iconeAspas)
        li.appendChild(conteudo)
        li.appendChild(autoria)
        li.appendChild(icones)
        listaPensamentos.appendChild(li)

    }

}

export default ui;