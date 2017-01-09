
//const Todo = require('./mongo').Todo
const fs = require("fs");
const bodyParser = require('body-parser');

const logPath = __dirname.replace("modules","loglogin");

const api = {
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

	saveLogingAuth : (req, res) => {
		//console.log("api : loginAuth res ",  res);
		console.log("api : loginAuth1 ", req.params.body);
		//console.log("api : loginAuth req ", req.data);		
		//console.log("api : loginAuth3 ", req.body);
		
		let result = "Logged on : " + Date() + ' ,IDAuth:     \n' // + req.body; //.loginAuth;
		console.log("result: ", result," fl: ", logPath + '\\loglogin.txt');

		//fs.writeFile(logPath + 'loglogin.txt', JSON.stringify(result), (err) => {
		fs.writeFile(logPath + '\\loglogin.txt', result, (err) => {
        if(err) return console.log("err = " , err);

        console.log("~~~~~~~~ all done!");
    })

	//fs.writeFile( imagesPath + req.body.imgName + ".jpeg", req.body.imgData, "base64" , () => {
	//		res.end()
	//	})

	}
}


module.exports = {
	api
}
