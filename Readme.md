### This Git

> https://github.com/samedan/2412_nodejs_google_oauth_books

# Source Youtube

> https://www.youtube.com/watch?v=SBvmnHTQIPY

# Source Git

> https://github.com/bradtraversy/storybooks

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

> app.use(express.static(path.join(\_\_dirname, 'public')));

## Template for Login Page

> routes/index.js -> {res.render("login", {layout: "login" })}

> views/LAYOUT/login.hbs css

> views/login.hbs -> {{{body}}}

> ![LoginPage](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print01.jpg)

### Google Console

>

```
    Login with Google Auth0 Passport
```

### Passport for Google OAuth20

> https://www.passportjs.org/packages/passport-google-oauth2/

# /config/passport.js

>

# app.js

> app.use(session({}))

> app.use(passport.initialize), app.use(passport.session())

### User MODEL

> /models/User.js

# Google Strategy

> /config/passport.js

## Routes

> /routes/auth.js

> passport.js -> console.log in Backend(profile)
> ![Profile](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print02.jpg)

> error on passport.js -> let user = await User.findById()

### Menu

# Partial menu file

> /views/partials/\_header.hbs

> /views/layouts/main.hbs -> {{> _header}}

# Initialize Materialize on main.hbs

> <script>M.Sinenav...

> ![Nav Menu](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print03.jpg)

### Auth

> /middleware/auth.js -> ensureAuth, ensureGuest

# Get Middleware in Auth route

> /routes/index.js -> const {ensureAuth, ensureGuest} = require('')

# Store session in the DBB

> app.js -> const MongoStore = require("connect-mongo")(session);

> app.js -> store: new MongoStore({ mongooseConnection: mongoose.connection })

# User session saved in MongoDB

> ![Session MongoDB](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print04.jpg)

# Display user data in /views/dashboard.hbs

> dashboard.hbs -> <h3>Welcome {{name}}</h3>

### Add Data Stories

# table in dasbboard.hbs

> /models/Story.js

> add Button in Partials: /views/partials/\_add_btn.hbs
> add the Button in /views/layouts/main template : {{> _add_btn}}

```
Post story editor/form
```

### Data editor CKEDITOR

> main.hbs - initialize

> replaces 'name="body"' in <textarea></textarea> in add.hbs with CKEDITOR

## BodyParser Middleware

> app.js -> app.use(express.urlencoded({ extended: false }));

> ![Stories table](https://github.com/samedan/2412_nodejs_google_oauth_books/blob/main/public/images/print05.jpg)
