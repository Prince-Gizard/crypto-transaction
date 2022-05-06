// https://eth-ropsten.alchemyapi.io/v2/9q_2XPpVXQ6-CHLwgRvWFLuD2NwvQjS9 


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9q_2XPpVXQ6-CHLwgRvWFLuD2NwvQjS9',
      accounts: ['2e5588fca8f9c99cac74d58b6472b8f2852aecd573b12148736e89d9151d7507'],
    },
  },
};
