const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, () => console.log('Server 💻 is up on -> ', PORT))
