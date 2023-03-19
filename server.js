
const express = require('express')
const app = express();
const port = 5501;
var path = require("path");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(express.static(path.join(__dirname,"public")));



app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/public/index.html', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/getshop', (req, res) => {
  res.sendFile('./public/get_shop.html', { root: __dirname })

})


