const hre = require("hardhat")

async function main() {
    const TheTok = await hre.ethers.getContractFactory("TheTok20")
    const theTok = await TheTok.deploy()
    await theTok.deployed()
    console.log("TheTok deployed to:", theTok.address)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
