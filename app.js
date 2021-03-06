const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('api/auth/', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        
        await mongoose.connect(config.get('mongoUri'), 
        /*
        function(err) {
            if (err) throw err;
        },
        */
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        );
        
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`));
    } catch (e) {
        console.log('Server error', e.mongoose);
        process.exit(1);
    }
}

start();