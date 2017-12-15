pragma solidity ^0.4.18;

import "./Ownable.sol";
import "./BasicNFT.sol";
import "./SafeMath.sol";

contract GAZUAToken is Ownable, BasicNFT {
    string public name = "Gazua";
    string public symbol = "GAZ";
    uint public limitation = 300;

    using SafeMath for uint;

    function generateToken(address beneficiary, uint tokenId, string _metadata) public onlyOwner {
        require(tokenOwner[tokenId] == 0);
        require(totalSupply() <= limitation);
        _generateToken(beneficiary, tokenId, _metadata);
    }

    function _generateToken(address beneficiary, uint tokenId, string _metadata) internal {
        _addTokenTo(beneficiary, tokenId);
        totalTokens++;
        _tokenMetadata[tokenId] = _metadata;

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
    
}