document.getElementById('stringForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const textoInput = document.getElementById('texto').value;
    const url = '/api/manipulacao-string';
    const corpo = JSON.stringify({ text: textoInput });

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: corpo
        });

        const dados = await resposta.json();
        exibirResultado(dados);
    } catch (erro) {
        console.error('Erro ao enviar requisição:', erro);
    }
});

function exibirResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Palíndromo: ${resultado.palindromo}</p>
                               <p>Ocorrências de caracteres: ${JSON.stringify(resultado.ocorrencias_caracteres)}</p>`;
}
