import express from 'express'
import cors from 'cors'
import { UserController } from './controllers/user.contoller.js'
import { TweetController } from './controllers/tweet.controller.js'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())

//POSTS
app.post("/register", UserController.createUser);
app.post("/login", UserController.login);
app.post("/tweet/create", TweetController.createTweet);
app.post("/tweet/like", UserController.likePost);

//GETS
app.get("/homepage", UserController.getHomePageData);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
