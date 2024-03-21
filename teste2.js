const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para manipulação de strings
app.post('/api/manipulacao-string', (req, res) => {
    const texto = req.body.texto;

    // Verificar se a string é um palíndromo
    const palindromo = verificarPalindromo(texto);

    // Contar o número de ocorrências de cada caractere na string
    const ocorrencias = contarOcorrencias(texto);

    // Retornar a resposta com os resultados
    res.json({ palindromo, ocorrencias });
});

// Função para verificar se a string é um palíndromo
function verificarPalindromo(texto) {
    // Remover espaços em branco e converter para minúsculas
    const textoFormatado = texto.replace(/\s/g, '').toLowerCase();
    // Inverter a string formatada
    const textoInvertido = textoFormatado.split('').reverse().join('');
    // Verificar se a string formatada é igual à string invertida
    return textoFormatado === textoInvertido;
}

// Função para contar o número de ocorrências de cada caractere na string
function contarOcorrencias(texto) {
    const ocorrencias = {};
    // Remover espaços em branco e converter para minúsculas
    const textoFormatado = texto.replace(/\s/g, '').toLowerCase();
    // Iterar sobre cada caractere na string
    for (let char of textoFormatado) {
        // Incrementar o contador de ocorrências para o caractere atual
        ocorrencias[char] = (ocorrencias[char] || 0) + 1;
    }
    return ocorrencias;
}

// Iniciar o servidor
const port = process.env.PORT || 3000; // Usar a porta fornecida pelo Glitch ou 3000 como padrão
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

