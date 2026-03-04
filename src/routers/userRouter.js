import express from 'express'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.send("Exemplo de get na rota /user no Router")
})  

userRouter.post('/profile', (req, res) => {
  res.send("Exemplo de post na rota /user no Router")
})

userRouter.put('/profile', (req, res) => {
  res.send("Exemplo de put na rota /user no Router")
})

userRouter.delete('/profile', (req, res) => {
  res.send("Exemplo de delete na rota /user no Router")
})  

userRouter.patch('/profile', (req, res) => {
  res.send("Exemplo de patch na rota /user no Router")
})

export default userRouter


