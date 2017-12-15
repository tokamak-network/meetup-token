const GAZUAToken = artifacts.require("./GAZUAToken.sol");

module.exports = function(deployer) {
 deployer.deploy(GAZUAToken);
 console.log(GAZUAToken)

};
