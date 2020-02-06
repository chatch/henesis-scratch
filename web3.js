const Web3 = require('web3')

const creds = require('./credential.json')
const network = 'rinkeby'
const providerURL = `https://tn.henesis.io/ethereum/${network}?clientId=${creds.clientId}`

const web3 = new Web3(providerURL)

const main = async () => {
  const num = await web3.eth.getBlockNumber()
  console.log(num)
}

main()
