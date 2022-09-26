const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('Public'))


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/user/:username', (req, res)=>{
    res.render('user', { username: req.params.username, project: ['project1', 'project2']}) 
})

app.post('/check', (req, res) =>{
    let username = req.body.username
    if(username==""){
        return res.redirect('/')
    }
    else {
        return res.redirect('/user/'+ username)
    }
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is here: http://localhost:${PORT}`)
})