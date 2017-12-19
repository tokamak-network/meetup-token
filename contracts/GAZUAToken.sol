pragma solidity ^0.4.18;

import "./Ownable.sol";
import "./BasicNFT.sol";
import "./SafeMath.sol";

contract GAZUAToken is Ownable, BasicNFT {
    string public name = "Gazua";
    string public symbol = "GAZ";
    uint public limitation = 300;

    mapping (uint => string) public _message; //Personal Message;

    event MessageUpdated(uint tokenId, address owner, string data);

    using SafeMath for uint;

    function generateToken(address beneficiary, uint tokenId, string _metadata, string _personalMessage) public onlyOwner {
        require(tokenOwner[tokenId] == 0);
        require(totalSupply() <= limitation);
        _generateToken(beneficiary, tokenId, _metadata, _personalMessage);
    }

    function _generateToken(address beneficiary, uint tokenId, string _metadata, string _personalMessage) internal {
        _addTokenTo(beneficiary, tokenId);
        totalTokens++;
        _tokenMetadata[tokenId] = _metadata;
        _message[tokenId] = _personalMessage;
        Created(tokenId, beneficiary, _metadata);
    }

    // no one can update metadata
    function updateTokenMetadata(uint tokenId, string _metadata) public {
         throw; 
    }

    function addLimitation(uint _quantity) public onlyOwner returns (bool) {
        limitation = limitation.add(_quantity);
        return true;
    }

    function updateMessage(uint _tokenId, string _personalMessage) {
        require(tokenOwner[_tokenId] == msg.sender);
        _message[_tokenId] = _personalMessage;
        MessageUpdated(_tokenId, msg.sender, _personalMessage);
    }

    function getMessage(uint _tokenId) public constant returns (string) {
        return _message[_tokenId];
    }

}