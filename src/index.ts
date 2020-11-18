import express from 'express';
import { json } from 'body-parser';

const app = express()
app.use(json())

var port = 3000;

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})