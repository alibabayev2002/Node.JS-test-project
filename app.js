const express = require('express')
const userRouter = require('./routes/users')
var exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const app = express()
var users = require('./models/users');
const User = require('./models/users');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//middleware
app.use(userRouter)

//mongodb connect

mongoose.connect('mongodb+srv://alibabayev:5518585e@cluster0.9bgbe.mongodb.net/passport?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected')
}).catch(() => {
    console.log('error')
});





const PORT = 3000 || process.env.PORT


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// app.use((req,res,next)=>{
//     res.send('404 not found')
// })

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {

    console.log(`app started PORT - ${PORT}`)
})