require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")
require("@openzeppelin/hardhat-upgrades")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage") // npx hardhat coverage -> Usage
require("hardhat-deploy")
require("hardhat-deploy-ethers");
let secret = require("./.secret")

//const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL 
//const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    paths: {
        artifacts: "./artifacts",
    },
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337, // jak mamy npx node i deployuyemu cos na localhost to mamy info o transakcjach
        },
        rinkeby: {
            url: secret.rinkeby_url,
            accounts: [secret.rinkeby_key],
            chainId: 4,
            blockConfirmations: 2,
            // url: RINKEBY_RPC_URL,
            // accounts: [PRIVATE_KEY],
            // chainId: 4,
            // env option!
        },
    },

    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.7.0",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.4.21",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.8.7",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.5.0",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.6.2",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.6.0",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
            {
                version: "0.8.8",
                settings: {
                  optimizer: {
                      enabled: true,
                      runs: 300,
                  },
                },
            },
        ],
    },
    mocha: {
      timeout: 1000000000
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
      enabled: true,
      showTimeSpent: true,
      outputFile: "gas-report.txt",
      noColors: true,
      currency: "USD",
      coinmarketcap: COINMARKETCAP_API_KEY,
      // token: "MATIC", // how to check other currencies ETH
    },
    namedAccounts: {
      deployer: {
        default: 0,
        1: 0,
      },
      user: {
          default: 1,
      }
    },
}
