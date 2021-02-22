import express from 'express';

const app = express();

/**
 * Methods HTTP
 * GET => Search
 * POST => Save
 * PUT => Alter
 * DELETE => Delete 
 * PATCH => Alteração específica
 */

 //http://localhost:8080/
app.get("/", (req, res)=>{
    return res.json({messagem: 'Hello World - NLW'});
});

//1º params => router(API)
//2º params => request, response
app.post("/", (req, res)=>{

    //return datas to save (POSTMAN)
    return res.json({messagem: 'Data has been save'})
})

app.put('/input', (req, res)=>{
    return res.json({messagem: "Data changed"})
})

app.listen(8080, ()=> console.log( 'Server is running (in TS)' ))