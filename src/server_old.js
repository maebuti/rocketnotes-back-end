const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
/*Route Params - obrigatorio*/
/*app.get("/message/:id/:user",(request,response) => {
  const {id, user} = request.params
  response.send(`A mensagem é: ${id} para o nome do usuário: ${user}.`);
})*/

/*Query Params - opcional*/
/*app.get("/users",(request,response) => {
  const {page, limit} = request.query
  response.send(`Page: ${page} e limit: ${limit}`)
})*/

/*app.post("/users",(request,response) => {
  response.send("Você chamou o post!")
})*/

app.post("/users",(request,response) => {
  const{name, email, password} = request.body
  /*response.send(`Nome: ${name}, email: ${email}, senha: ${password}`)*/
  response.json({name, email, password})
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))