require("hardhat-tracer");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 43114,
      forking: {
        url: "https://api.avax.network/ext/bc/C/rpc",
        timeout: 0,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
