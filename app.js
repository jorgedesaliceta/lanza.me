const https = require('https');

module.exports.shorten = function(options){
	
	return new Promise(function(resolve, reject){
		
		if(!options || options.url || options._id){
			reject('options are missing')
		}
		
		const data = JSON.stringify({
		  		  
		  url: encodeURIComponent(options.url),
		  _id: options._id, //secret
		  
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
				resolve(JSON.parse(d))
			})
		})

		req.on('error', error => {
			reject(error)
		})

		req.write(data)
		req.end()
	})
}