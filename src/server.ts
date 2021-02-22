import express from 'express';

const app = express();


/**
 * Methodos HTTP
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar 
 * PATCH => Alteração específica
 */

 //http://localhost:8080/
app.get("/", (req, res)=>{
    return res.json({messagem: 'Hello World - NLW'});
});

//1º parametro => Rota(Recurso API)
//2º paramentro => request, response
app.post("/", (req, res)=>{
    //imagine que já recebeu os dados para salvar
    return res.json({messagem: 'Dados foram salvos com sucesso'})
})

app.put('/input', (req, res)=>{
    return res.json({messagem: "Dados foram Alterados"})
})

app.listen(8080, ()=> console.log('Servidor Rodando em TS'))