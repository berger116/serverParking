
//const Todo = require('./mongo').Todo
const fs = require("fs");
//const bodyParser = require('body-parser');

const logPath = __dirname.replace("modules", "loglogin");

const api = {


	saveLogingAuth: (req, res) => {
		//console.log("api : loginAuth res ",  res);
		console.log("api : loginAuth1 ", req.body);
		//console.log("api : loginAuth req ", req.data);		
		//console.log("api : loginAuth3 ", req.body);

		const result = "Logged on : " + Date() + ', IDAuth: ' + req.body.loginAuth + '\n' 
		console.log("result: ", result, " fl: ", logPath + '/loglogin.txt');

		//fs.writeFile(logPath + 'loglogin.txt', JSON.stringify(result), (err) => {
		fs.appendFile(logPath + '/loglogin.txt', result, (err) => {
			if (err) return console.log("err = ", err); 

			console.log("~~~~~~~~ all done!");

		})
		
		res.send("OK !!")

		//fs.writeFile( imagesPath + req.body.imgName + ".jpeg", req.body.imgData, "base64" , () => {
		//		res.end()
		//	})

		//	getItems : (req,res) => {
		//		Todo.find((err, docs) => {
		//			if(err) return console.log(err);
		//			res.json(docs);
		//		})
		//	},
		//	deleteItem : (req,res) => {
		//		Todo.findByIdAndRemove(req.params.id,  (err, doc) => {
		//			if(err) return console.log(err);
		//			res.json(doc);
		//		})
		//	},
		//	addItem : (req,res) =>{
		//		(new Todo(req.body)).save((err, doc) => {
		//			if(err) return console.log(err);
		//			res.json(doc);
		//		})
		//	}
	}
}

module.exports = {
	api
}
