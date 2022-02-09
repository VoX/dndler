import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { body, validationResult } from 'express-validator';
import * as generator from './generators.js';
import bodyParser from 'body-parser';
import {
    sourcebooks,
    names,
    backgrounds,
    races,
    classFeatures
  } from '../data/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) =>
{
    res.header('Access-Control-Allow-Origin', '*'); //this should not be accepting all in deployment
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req, res) => {
    res.status(200).send("lol hi im api");
})

app.get('/sourceprint', (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.status(200).send(JSON.stringify(sourcebooks));
})

app.get('/sources', (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.status(200).send(JSON.stringify(sourcebooks));
})

app.post('/custom', (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    console.log(req.body);
    res.status(200).send(JSON.stringify(generator.generateAll()));
})

//Leaving the old code here for reference until we want to merge this over to main

//dev requires
// import { formParse } from '../client/js/interpreter.js';
// import { debugDisplay } from '../client/js/characterpage.js';

// app.use(express.static(path.join(__dirname, '../client')));
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../client', '/index.html'));
// })

// app.get('/custom', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../client', '/custom.html'));
// });

// app.post('/', (req, res) => {
//     res.status(200).send(debugDisplay(generator.generateAll()));
// });

// app.post('/custom', (req, res) => {
//     res.status(200).send(formParse(req.body));
// });

// app.get('/characters/:name', (req, res) => {
//     const character = characters.find(c => c.name === req.params.name);
//     if(!character) res.status(404).send('The character with the given name was not found.');
//     else res.send(character);
// });

app.listen(port, () => console.log(`DNDLER listening on port ${port}!`));