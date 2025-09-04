import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())

app.get("/clientes", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.post("/clientes", async (req, res) => {
  console.log(req.body);

  await prisma.user.create({
    data: {
      name: req.body.name,
      idade: req.body.idade,
      email: req.body.email,
      cep: req.body.cep,
      cidade: req.body.cidade,
      estado: req.body.estado,
    },
  });

  res.status(201).json(req.body);
});

app.put("/clientes/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      idade: req.body.idade,
      email: req.body.email,
      cep: req.body.cep,
      cidade: req.body.cidade,
      estado: req.body.estado,
    },
  });

  res.status(200).json(req.body);
});


app.delete('/clientes/:id',async(req, res)=>{
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Cliente deletado com sucesso!'});
})

app.listen(PORT);
