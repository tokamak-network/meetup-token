#GAZUA Token
=============
Seoul Ethereum Meetup Collectible Token ("Ethereum $1,000 GAZUA!") based on </br>[EIP721](https://github.com/ethereum/EIPs/issues/721)

###Description
- GAZUA is a Collectible token issued by Seoul Ethereum Meetup
- The token is issued with limitation quantity each Meetup.
- Token Name: GAZUA
- symbol: GAZ
- 16th Meetup Metadata: “16th Seoul Ethereum Meetup! 1,000$ gazua!”

###function
- getAllTokens
```
function getAllTokens(address owner)
```
- updateMessage
```
function updateMessage(uint _tokenId, string _personalMessage)
```
- getMessage
'''
 function getMessage(uint _tokenId)
'''

###Contract Deploy
- GAZUAToken deployed at </br> [0xb88764ea63874d95740df258f22e69e92456ff3c](https://etherscan.io/address/0xb88764ea63874d95740df258f22e69e92456ff3c)

###Abi

- GAZUAToken abi
```
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "getAllTokens", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "tokenOwner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_quantity", "type": "uint256" } ], "name": "addLimitation", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenId", "type": "uint256" }, { "name": "_metadata", "type": "string" } ], "name": "updateTokenMetadata", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "_message", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "tokenMetadata", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_tokenId", "type": "uint256" }, { "name": "_personalMessage", "type": "string" } ], "name": "updateMessage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "getMessage", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "allowedTransfer", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "_tokenMetadata", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "takeOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "limitation", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "_metadata", "type": "string" }, { "name": "_personalMessage", "type": "string" } ], "name": "generateToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "ownedTokens", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "metadata", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "tokenId", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "data", "type": "string" } ], "name": "MessageUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "tokenId", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "metadata", "type": "string" } ], "name": "Created", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "tokenId", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" } ], "name": "Destroyed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "tokenId", "type": "uint256" }, { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" } ], "name": "Transferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "beneficiary", "type": "address" }, { "indexed": false, "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "tokenId", "type": "uint256" }, { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "data", "type": "string" } ], "name": "MetadataUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" } ]
```

###How To use MyEtherWallet
- </br>[Documents](https://docs.google.com/presentation/d/1GWHFmxOPuPRzOZkbkl7viRgAWA3abIsQ55QM4d06gAw/edit#slide=id.g2c5a7f4d60_0_0)








