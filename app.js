const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller')

app.get('/search/:query', controller.search);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
