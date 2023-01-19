const ul = document.getElementById('lista'); // Pegar <ul>

if (ul) { // Verifica se existe
    fetch(path)
        .then(resp => resp.json()) // Tenta converter para json
        .then(dados => { // Caso consiga
        let htmlLi = [];

        dados.forEach(item => { // loop cada elemento
            htmlLi.push(`
            <li class="d-flex justify-content-between align-items-center border-bottom">
				<p>
					<b>Id:</b> ${item.id}
				</p>
                <p>
                    <b>Nome:</b> ${item.nome} - <b>Fone:</b> ${item.fone} <br/> 
                    <b>Instagram:</b> ${item.instagram} - <b>Data de nascimento:</b> ${item.nascimento}
                </p>

                <button type="button" class="btn btn-sm btn-danger" onClick="deleteItem(${item.id})">X</button>
            </li>`);
        });

        ul.innerHTML = htmlLi;
    })
    .catch(erro => { // Caso ouver erro
        console.log(erro);
    })
}