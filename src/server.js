const express = require('express');

const app = express();

app.get('/:nome', (req, res) => {
    const { nome } = req.params;
    res.send(`Rota de API criada pelo(a): ${nome}`)
})

app.listen(3334);