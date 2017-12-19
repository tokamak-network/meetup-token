var fs = require('fs'); 

var Web3 = require('Web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://onther.io:60001'));
// var HDWalletProvider = require("truffle-hdwallet-provider");

// var mnemonic = "ramp perfect soft garbage prize struggle convince vacuum original board fiber hybrid"
// const hdProvider = new HDWalletProvider(mnemonic,"https://ropsten.infura.io/",0);

// var web3 = new Web3(hdProvider);

//TODO

var owner = "0x6278C450a640fba340f01D63c3c56156E6d7c821";
var gaz_address = "0xb88764eA63874D95740Df258f22e69E92456ff3C";
var gaz_abi = require('../build/contracts/GAZUAToken.json').abi;

var gazuaToken = new web3.eth.Contract(gaz_abi, gaz_address);
var metadata = "16th Seoul Ethereum Meetup! 1,000$ gazua!"

function timeout(sec) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, sec * 1000)
    })
}

fs.readFile('ownerList.csv', 'utf8', async function(err, data) { 
    var i,j,len,result, temp;   
    result = data.split('\r\n');
    len = result.length;

    var currentNonce = await web3.eth.getTransactionCount(owner)
    console.log("currentNonce", currentNonce);

    for(i=58;i<len;i++) {
        temp = result[i].split(',');
        console.log("i : ", i)

            await timeout(4);

        try{
            gazuaToken.methods.generateToken(temp[4],temp[0],metadata,temp[5]).send({
                from: owner,
                gas: 3000000,
                gasPrice: 25e9,
                nonce: currentNonce + i
            })
        } catch(e){
            console.log(e)
        }
                
    }
    console.log("sending Transaction completed")

});



