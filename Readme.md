### Installed packages

> npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20

### Node environment
> npm i -D nodemon cross-env


### connected to Database
> config/config.env

### Morgan
> app.use(morgan('dev')) -> Helper show http, method in console

### TEMPLATE HandleBars
> app.engine('.hbs', exphbs.engine())

### Routes
> /routes/index.js -> app.use('/', require('./routes/index'));