var ENS = require('ethjs-ens');
var Web3 = require('Web3');
const HttpProvider = require('ethjs-provider-http')

var provider = new HttpProvider("https://mainnet.infura.io")
var _r;

function setupEns (provider) {
 
  // Currently requires both provider and 
  // either a network or registryAddress param 
  const ens = new ENS({ provider, network: '1' })
 
  ens.lookup('kaipark.eth')
  .then((address) => {
    const expected = '0x5f8f68a0d1cbc75f6ef764a44619277092c32df0'
    console.log(address);
 
    if (address === expected) {
      console.log("That's how you do it!")
    }
  })
  .catch((reason) => {
    // There was an issue! 
    // Maybe the name wasn't registered! 
    console.log(reason)
  })
}
setupEns(provider)

