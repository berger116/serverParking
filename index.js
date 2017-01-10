const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const port = 8109 || process.env.PORT // 4200; //8080;

const bodyParser = require('body-parser');

const root = __dirname.replace("server","dist")

const api = require('./modules/api').api;

const log = (req, res, next) => {
	const condition = true;
	if(condition){
		next();
	} else {
		res.status(403).end();
	}
}

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())
	.use(cors());  //ajout

app
//	.post('/login', log , api.saveLogingAuth)
	.post('/login', api.saveLogingAuth)
//	.get('/todos', log , api.getItems)
//	.post('/todos', log, api.addItem )
//	.delete('/:id', log, api.deleteItem )

server.listen(port, ()=>{
	console.log("Listnening on port " + port)
});

