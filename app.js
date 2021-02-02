
//lanza.me-node-module.js

const https  = require('https');
//const config = require();

module.exports.shorten = function(options){
	
	return new Promise(function(resolve, reject){
		
		if(!options && options.url){
			
		}
		
		const data = JSON.stringify({
		  
		  ///Required
		  url: encodeURIComponent(options.url), //'google.es',
		  _id: options._id,  //'2092a6e82ff58eee34780f29dc59d8f0d02f3e563b4ef7265781'
		  
		  group: options.group,
		  isNpmModule: true
		  
		})
		
		const reqOptions = {
		  hostname: 'lanza.me', //port: 443,
		  path: '/api/json/acortar',
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length
		  }
		}
		
		const req = https.request(reqOptions, res => {
			//console.log(`statusCode: ${res.statusCode}`)
			res.on('data', d => {
				//process.stdout.write(d) //console.log(d) sale buffer
				resolve(JSON.parse(d));
			})
		})

		req.on('error', error => { //console.error(error)
			reject(error)
		})

		req.write(data); //creo que es el envío
		req.end();
		//console.log('result: ', result); //undefined
	})
}