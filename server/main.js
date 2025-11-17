import express from 'express'
import cors from 'cors'
import { UserController } from './controllers/user.contoller.js'
const app = express()
const port = 3000


app.use(express.json())
app.use(cors())

//POSTS
app.post("/register", UserController.createUser);
app.post("/login", UserController.login);

//GETS





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
