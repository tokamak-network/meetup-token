var GAZUAToken = artifacts.require("GAZUAToken.sol");

module.exports = async function(deployer) {
    const gazua = await GAZUAToken.new();
    console.log('token is deployed at: ', gazua)
};
