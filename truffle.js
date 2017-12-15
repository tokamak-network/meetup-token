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
      network_id: "3"
    }
  }

};
