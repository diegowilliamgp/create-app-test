const form = document.getElementById('form'); // Pegar <form>

if (form) { // Verifica se existe
    form.addEventListener('submit', (e) => { // Adicionar um evento
        e.preventDefault(); // bloquear formulário de atualização de página

        const dados = {
            nome: document.getElementById('nome').value,
            fone: document.getElementById('fone').value,
            instagram: document.getElementById('instagram').value,
            nascimento: document.getElementById('nascimento').value,
            descricao: document.getElementById('descricao').value,
        }

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        });

        window.location.replace('/pessoas.html');
    });
}