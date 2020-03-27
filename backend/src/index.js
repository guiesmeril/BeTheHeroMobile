const express = require('express');
const cours = require('cors');
const routes = require ('./routes')

const app = express();

app.use(cours());
app.use(express.json());
app.use(routes);

app.listen(3333);