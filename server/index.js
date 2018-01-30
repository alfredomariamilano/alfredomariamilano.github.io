const { Nuxt, Builder } = require('nuxt')

const express = require('express')

const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.json({type: 'application/*'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

const isDev = !(process.env.NODE_ENV === 'production')

// Import and Set Nuxt.js options
let configNuxt = require('../nuxt.config.js')

configNuxt.dev = isDev

// Init Nuxt.js
const nuxt = new Nuxt(configNuxt)

// Build only in dev mode
if (configNuxt.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

app.listen(3000, () => console.log(`Express started on port: ${3000}`))
