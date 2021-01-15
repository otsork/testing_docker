const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let userText = 'Testing Docker!'

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <form action="/store-text" method="POST">
        <h2>Test app for testing Docker</h2>
        <h3>${userText}</h3>
          <div class="form-control">
            <label>Type here</label>
            <input type="text" name="text">
          </div>
          <button>Change text</button>
        </form>
      </body>
    </html>
  `)
})

app.post('/store-text', (req, res) => {
  const { text } = req.body
  console.log(text)
  userText = text
  res.redirect('/')
})

app.listen(8000)
