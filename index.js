const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')

const app = express() 

const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs',
})

app.engine('hbs', hbs.engine) //регистрируем данный движок
app.set('view engine', 'hbs') //начинаем использовать
app.set('views', 'views') //название папки, где будут зраниться шаблоны

app.use(express.static('public'))


app.get('/', (req, res) => {
   //res.status(200) идет по умолчанию
   //res.sendFile(path.join(__dirname, 'views', 'index.html')) убрали, т.к. для файлов .hbs она нам больше не нужна
   res.render('index')
})
app.get('/about', (req, res) => {
   res.render('about')
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})