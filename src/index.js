const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://italo:editalo87@cluster0-exva0.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true } );

app.use(express.json());
app.use(routes);

app.listen(3232);