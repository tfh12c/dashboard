const express = require('express');
const app = express();
const port = 3000;

//Middleware 
app.use(express.json()); //Parse JSON request bodies

//Start server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})