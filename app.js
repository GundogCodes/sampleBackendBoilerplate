/*
require:
-jsx-view-engine (creating Views)
-methodOverride (controlling HTTP requests)
-express (controlling server)
-morgan (logging HTTP requests)
- routes (from routes)

create:
-set ViewEngine
-run viewEngine
-app.use(json) (process json packages)
-app.use(urlencoded) (process forms)
-app.use(morgan('combined')) (logging HTTP requests)
-app.use(method)
-app.use('/',userRoutes) (sets 'homepage' of app)

export:
-app
*/

/*
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const morgan = require('morgan')
const express = require('express')
const notesRoutes = require('./routes/userRoutes')
const app = express()


app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('combined'))
app.use(methodOverride('_method'))
app.use('/', userRoutes)

module.exports = app
*/