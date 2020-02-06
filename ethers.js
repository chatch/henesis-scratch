const ethers = require('ethers')

const creds = require('./credential.json')
const network = 'rinkeby'
const providerURL = `https://tn.henesis.io/ethereum/${network}?clientId=${creds.clientId}`

const provider = new ethers.providers.JsonRpcProvider(providerURL, network)

const main = async () => {
	const num = await provider.getBlockNumber()
	console.log(num)
}

main()