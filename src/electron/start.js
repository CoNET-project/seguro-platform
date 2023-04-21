
const start = async () => {
	const express = require('express');
	const cors = require('cors')
	const path = require('path');
	const app = express();
	app.use (cors());
	const pathSt = path.join(__dirname,'../..', 'build');
	app.use(express.static(pathSt));
	console.log (pathSt);
	app.listen(3000);

}

start()