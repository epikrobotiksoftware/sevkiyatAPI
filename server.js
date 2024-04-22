const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
const cors = require('cors')
app.get(cors())

const port = process.env.PORT || 5050
app.listen(port, () => {
  console.log(`App is listening on ${port} `)
})
