const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/api/manipulacao-string', (req, res) => {
    const entrada = req.body.text;
    
    // Verificar se a string é um palíndromo
    const palindromo = isPalindrome(entrada);

    // Contar o número de ocorrências de cada caractere na string
    const ocorrencias = countOccurrences(entrada);

    // Retornar a resposta
    res.json({ palindromo, ocorrencias });
});

// Função para verificar se a string é um palíndromo
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Função para contar o número de ocorrências de cada caractere na string
function countOccurrences(str) {
    const occurrences = {};
    for (let char of str) {
        if (occurrences[char]) {
            occurrences[char]++;
        } else {
            occurrences[char] = 1;
        }
    }
    return occurrences;
}

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
