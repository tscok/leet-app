import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

const app = express()
const port = process.env.PORT || 3001

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '/public')))

app.get('/employees', async (_, res) => {
  const url = 'https://api.1337co.de/v3/employees'

  const options = {
    method: 'GET',
    headers: {
      Authorization: process.env.API_KEY,
    },
    mode: 'cors',
  }

  try {
    const response = await fetch(url, options)
    const body = await response.json()

    if (response.status !== 200) {
      throw new Error(`Server: Fetch failed with status ${response.status}`)
    }

    res.status(200).json({ data: body })
  } catch (e) {
    res.status(400).json({ msg: 'BadRequestError' })
  }
})

app.listen(port)
