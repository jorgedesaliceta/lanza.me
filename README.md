# lanza.me

Shorten URLs using [Lanza.me](https://lanza.me/ "Lanza.me shortener & metashortener")
 shortener in Node.js with 0 dependencies.

Install with "npm i lanzame".

```javascript
var lanzame = require('lanzame')

lanzame.shorten({_id: '1234567890', url: 'google.es'}).then(function(json){
	
	if(json.shortUrl){
		console.log('OK ', json.shortUrl) // ok
	}else{
		console.log('FAIL ', json.error) // fail some option, probably
	}
	
}).catch(function(err){
	
	console.log('ERROR ', err.error)	// a error message
	console.log('FALLB ', err.shortUrl) // fallback, returns the original long url
	
})
```