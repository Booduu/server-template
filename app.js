const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');
const api = require('./routes/api');
const index = require('./routes/index');
const bodyParser= require('body-parser');
const cors = require('cors');


app.use(cors());
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan('tiny'));

const routing = require('./routes');

app.use(routing);


app.listen(3030, () => {
    console.log('listening on 3030')
});


