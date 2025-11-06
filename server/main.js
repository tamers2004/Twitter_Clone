import express from 'express'
const app = express()
const port = 3000

let counter = 0
const posts = []

app.use(express.json())

app.post('/register', (req,res) => {
    
    console.log(req.body)

    if (!req.body) {
        return res.send({
            status : 'not ok',
            message : 'body is empty'
            
        })
        
    }
    
        
    posts.push(req.body)
    
    return res.send({
        status : 'ok'
    })
})

app.get('/get_all', (req,res) => {

    return res.send({
        posts
    })
})









app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
