const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: "./config/config.env"});

const databaseConnexion = async () => {
        try {
            const connexion = await mongoose.connect(process.env.MONGO_URI, {});
            console.log(`Connexion established on ${connexion.connection.host}. `);    
        } catch (error) {
            console.log(error);
            process.exit(1);        
        }
    };

databaseConnexion();
const app = express();

app.listen(3000, console.log("App running on port 3000"));