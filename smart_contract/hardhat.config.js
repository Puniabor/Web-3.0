// https://eth-ropsten.alchemyapi.io/v2/b6z04nULdW7eIYpgdjjeoCQEDOhHnf53

require('@nomiclabs/hardhat-waffle');

account = require('./Keys.json')

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url : 'https://eth-ropsten.alchemyapi.io/v2/b6z04nULdW7eIYpgdjjeoCQEDOhHnf53',
      accounts : [account['account']]
    }
  }
}