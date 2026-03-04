import express from 'express'

export const postRouter = express.Router()

postRouter.get('/', (req, res) => {
  res.send("Exemplo de get na rota /post no Router")
})  

postRouter.post('/profile', (req, res) => {
  res.send("Exemplo de post na rota /post no Router")
})

postRouter.put('/profile', (req, res) => {
  res.send("Exemplo de put na rota /post no Router")
})

postRouter.delete('/profile', (req, res) => {
  res.send("Exemplo de delete na rota /post no Router")
})  

postRouter.patch('/profile', (req, res) => {
  res.send("Exemplo de patch na rota /post no Router")
})

export default postRouter


