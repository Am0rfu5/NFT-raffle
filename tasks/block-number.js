const { task } = require("hardhat/config")

task("block-number", "Prints current block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = hre.ethers.provider.getBlockNumber()
        console.log(`Current block number is: ${blockNumber}`)
    }
)

module.exports = {}

// npx hardhat block-number -> current hardhat block = 0
// npx hardhat block-number --network rinkeby -> poda nam block obecny na Rinkeby