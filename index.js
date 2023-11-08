const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const sequelize = require('./database');
const Student = require('./models/Studant');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
  });

app.get('/alunos', async (req, res)=>{
    try {
        const alunos = await Student.findAll();
        return res.status(200).json(alunos)    
    } catch (error) {
        return res.status(500).json({msg: `${error}`})
    }
    
})

app.post('/cadastro', async (req, res) => {
    const{matricula, nome, email, senha} = req.body;

    try {
        await Student.create({
            matricula,
            nome,
            email,
            senha
        });
        return res.status(201).send('Usuário criado com sucesso!');
        } catch (error) {
            if(error == "SequelizeUniqueConstraintError: Validation error"){
                return res.status(500).json({msg: `email ja ultilizado`})
            }
        return res.status(500).send(`Erro no cadastro ${error}`);
    }
});

app.delete('/deluser/:id', async (req, res)=>{
    try {
        const studant = await Student.destroy({where:{
            id: `${req.params.id}`
        }})
        if(!studant){
            res.status(500).json({msg: "aluno não encontrado"})
        }else{
            res.status(401).json({msg: "aluno apagado com sucesso"})
        }
    } catch (error) {
            console.log(error)
            return res.status(500).json({msg: `aluno não encontrado:   ${error}`})
    }
})
app.put('/atualizar/:id', async (req, res)=>{
    try {
        const{matricula, nome, email, senha} = req.body;
        const studant = await Student.update(req.body,{where:{id:`${req.params.id}`}})
        return res.status(200).json({msg: "aluno atualizado com sucesso"})
    } catch (error) {
        if(error == "SequelizeUniqueConstraintError: Validation error"){
            return res.status(500).json({msg: `email ja ultilizado`})
        }else{
            return res.status(500).json({msg: `aluno não encontrado: ${error}`})
        }
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});