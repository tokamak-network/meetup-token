var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "ramp perfect soft garbage prize struggle convince vacuum original board fiber hybrid"



module.exports = {
    networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 4500000,
      network_id: "*" // Match any network id
    },
    ropsten:{
    provider: function(){
      return new HDWalletProvider(mnemonic,"https://ropsten.infura.io/",0);},
      gas: 4500000,
      gasPrice: 53000000000,
      network_id: "3"
    },
    mainnet:{
      host: "onther.io",
      port: 60001,
      gas: 4500000,
      gasPrice: 12e9,
      from: "0x6278c450a640fba340f01d63c3c56156e6d7c821",
      network_id: "1"
    }
  }

};
