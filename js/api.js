const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        }
        catch {
            alert('erro ao buscar pensamentos')
            throw error
        }
    },
    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            }
            )
            return await response.json()
        }
        catch {
            alert('erro ao salvar pensamentos')
            throw error
        }
    },
    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            }
            )
            return await response.json()
        }
        catch {
            alert('erro ao EDITAR pensamentos')
            throw error
        }
    },
    async buscarPensamentoId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()
        }
        catch {
            alert('erro ao BUSCARPENSAMENTPORID pensamentos')
            throw error
        }
    },
    async excluirPensamento(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE",
            })
        }
        catch {
            alert('erro ao exluir pensamentos')
            throw error
        }
    }
}
export default api; 