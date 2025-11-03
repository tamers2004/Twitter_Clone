import express from 'express'
const app = express()
const port = 3000

app.use(express.json())



app.get('/', (req, res) => {
    console.log('Hello Tamer!')
    res.send({
        message: 'Hello Tamer!',
        age:22
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
