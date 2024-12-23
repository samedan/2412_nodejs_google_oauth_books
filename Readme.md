### This Git 
> https://github.com/samedan/2412_nodejs_google_oauth_books

# Source Youtube
> https://www.youtube.com/watch?v=SBvmnHTQIPY

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

## Static files folder (public)
> app.use(express.static(path.join(__dirname, 'public')));

## Template for Login Page
> routes/index.js -> {res.render("login", {layout: "login" })}
> views/LAYOUT/login.hbs css
> views/login.hbs -> {{{body}}}

> ![LoginPage](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print01.jpg)
