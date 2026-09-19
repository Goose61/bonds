require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          evmVersion: "cancun",
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      }
    ]
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  },
  sourcify: {
    enabled: true
  }
};
