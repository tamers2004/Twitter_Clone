import express from 'express'
import { UserController } from './controllers/user.contoller.js'
const app = express()
const port = 3000


app.use(express.json())

//POSTS
app.post("/register", UserController.createUser)


//GETS





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
