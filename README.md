# example-openzeppelin-hardhat-upgrades

This is example repo for @openzeppelin/hardhat-upgrades

## Example Transaction

### Transparent

- deploy original implementation

  - [tx](https://ropsten.etherscan.io/tx/0x6d52706b37b97a67359313b8869bc89f8013d85b021d6cbb45b29ac6324870a5)
  - [deployed contract](https://ropsten.etherscan.io/address/0x5bdb644be9d74846e317002946ad4c227ab5e981#code)

- deploy proxy admin (this is 1 time per service)

  - [tx](https://ropsten.etherscan.io/tx/0xecf535a29aca4e4c263a9e5cb6885873d7d89df0496708076e7f48c9caab4ae9)
  - [deployed contract](https://ropsten.etherscan.io/address/0x6db528bc404c53da9ce262c8a9fc7308a32556d3#code)

- deploy proxy

  - [tx](https://ropsten.etherscan.io/tx/0x396a158eb4ccfc5ff73b8434331c9bd0265475fb296161372fd73859caf04a14)
  - [deployed contract](https://ropsten.etherscan.io/address/0xe900e1a72324c3bfdcf05926475e5a2016efb06f#code)

- deploy upgraded implementation

  - [tx](https://ropsten.etherscan.io/tx/0x2e7de9950fd079945c8ed4d929228d1b268a6618b3ab2dc703416ffe9f874038)
  - [contract](https://ropsten.etherscan.io/address/0xe76518998f27a4c71e18e1a90bf58ea6a7ee4828#code)

- upgrade proxy

  - [tx](https://ropsten.etherscan.io/tx/0xfb93041c426a81a558c6d4058e2626db32328ac39fb6a202e83e31258c61750c)

### UUPC

- deploy original implementation

  - [tx](https://ropsten.etherscan.io/tx/0x3c2b7c99f3942156380a13092027dc14b1213356d05ea80a69fa10ef86cbc331)
  - [deployed contract](https://ropsten.etherscan.io/address/0x57e36355942b043d92c42f69bbc4d42a7bf06f0f#code)

- deploy proxy

  - [tx](https://ropsten.etherscan.io/tx/0x223ae2f341e97c4e49af489610e78a88f9296e8967fcd6c92e9ab650af3d1016)
  - [deployed contract](https://ropsten.etherscan.io/address/0xb381521b8bf778ba47cfb1d7c204a9565124bdff#code)

- deploy upgraded implementation

  - [tx](https://ropsten.etherscan.io/tx/0x60030bff6ff59c16df796f0de74eb7be890d7ab80f065e84e0821ff727670c04)
  - [contract](https://ropsten.etherscan.io/address/0x78fac61d77d53950486d61249fa849dd42308e65#code)

- upgrade proxy

  - [tx](https://ropsten.etherscan.io/tx/0xd1f0fd5718849cb0d1a686191199e49210ccd1ee07c02f5ef814ca3ac5f39cb3)

### Beacon

- deploy implementation

  - [tx](https://ropsten.etherscan.io/tx/0xaf452ac4855bbbf747ac2aee53beb50ca89c2b32caba52440480a38df2dbf2fe)
  - [deployed contract](https://ropsten.etherscan.io/address/0xfd6d77f66a6093217a961aef6e54ecb1664eee21#code)

- deploy beacon

  - [tx](https://ropsten.etherscan.io/tx/0xcc1c02da176db7393ddd61ecf139525fadc28727c968b7e877ce687850feab9f)
  - [deployed contract](https://ropsten.etherscan.io/address/0xdc8fb5faf083aac5ff0951f822362137d5fdc30e#code)

- deploy beacon proxy 1

  - [tx](https://ropsten.etherscan.io/tx/0xf47a32a70db07a9e09ca37ec62f2a7ac3c79298ecdd6d77dfacf0a3c8671454b)
  - [deployed contract](https://ropsten.etherscan.io/address/0x20bd8f9c31079b7aa3ffa1b02852be10aeaba258#code)

- deploy beacon proxy 2

  - [tx](https://ropsten.etherscan.io/tx/0x984cabe3e1c2adb19b999591f9606c85bffa5ae39f3d1c35fe95a4633e03a9f4)
  - [deployed contract](https://ropsten.etherscan.io/address/0x32b927d3d57e822bec1214bb78fe387b1432d203#code)

- deploy beacon proxy 3

  - [tx](https://ropsten.etherscan.io/tx/0x978857fa2bb1600409d0404676d3b60b068dec0d2f9de9bd14808ef1ac4efe1d)
  - [deployed](https://ropsten.etherscan.io/address/0x9e3e59d6177c8b9b2ec78fc9e77b5c5fbb161199#code)

- deploy upgraded implementation

  - [tx](https://ropsten.etherscan.io/tx/0x9db45efd306defc3c4d16da081ee375347fce4b0092e51161936fbac338d7655)
  - [deployed contract](https://ropsten.etherscan.io/address/0x20b216db355db4fc54c932a1c32238037224bca8#code)

- upgrade beacon

  - [tx](https://ropsten.etherscan.io/tx/0xd614c1cf87a223087d000dc765fefbbc10ac98b6f402b3567ef1dd8a64bc1b25)
