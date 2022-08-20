const hre = require("hardhat")

async function main() {
    const Example = await hre.ethers.getContractFactory("Contract_name")
    const example = await Example.deploy("arguments")
    await example.deployed()
    console.log("X deployed to:", example.address)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
