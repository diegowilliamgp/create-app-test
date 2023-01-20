const form = document.getElementById('form');

if (form) { // Verifica se existe
    const inputId = document.getElementById('id'); // Obtém a tag <input> do ID

    inputId.addEventListener('input', () => { // Add um evento de alteração. Cada alteração na tag, irá consultar API
        let id = Number(inputId.value);

        fetch(path + id)
            .then(resposta => resposta.json()) // Tenta convertar a resposta para json
            .then(data => { // Caso consiga, preencherá os inputs de acordo com os "id" da tag
                document.getElementById('nome').value = data.nome ? data.nome : '';
                document.getElementById('fone').value = data.fone ? data.fone : '';
                document.getElementById('instagram').value = data.instagram ? data.instagram : '';
                document.getElementById('nascimento').value = data.nascimento ? data.nascimento : '';
                document.getElementById('descricao').value = data.descricao ? data.descricao : '';
            });
    });

    form.addEventListener('submit', (e) => { // Add um evento ao formulário
        e.preventDefault(); // bloquear formulário de atualização de página

        const dados = {
            id: Number(document.getElementById('id').value),
            nome: document.getElementById('nome').value,
            fone: document.getElementById('fone').value,
            instagram: document.getElementById('instagram').value,
            nascimento: document.getElementById('nascimento').value,
            descricao: document.getElementById('descricao').value,
        }

        fetch(path + inputId.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        });

        setTimeout(() => {
            window.location.replace('./index.html');
        }, 500)

        
    });
}