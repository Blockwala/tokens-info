var erc20Tokens = require('../erc20/ethTokens.json')
// var _ = require('loadash')
var fs = require('fs');

var images = fs.readdirSync('../../images/erc20-images/');

files =[]
finalTokens = []

for (i = 0; i < images.length; i++) {
	img = images[i].replace('.png','')
	files.push(img)
}

for(i = 0; i < erc20Tokens.length; i++) {

	for (j = 0; j < files.length; j++) {
		// console.log(files[j].toLowerCase())
		// console.log(erc20Tokens[i].address.toLowerCase())
		if(erc20Tokens[i].address.toLowerCase() == files[j].toLowerCase()) {
			finalTokens.push(erc20Tokens[i])
		}
	}
}


fs.writeFile('../erc20/ethTokensLive.json', JSON.stringify(finalTokens), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
// var allTokens = _.