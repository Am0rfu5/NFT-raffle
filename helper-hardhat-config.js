const networkConfig = {
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e"
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945"
    },
    31337: {
        name: "localhost",
    },
    1: {
        name: "mainnet",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    }
}

const developmentChains = ["hardhat", "localhost"]
const decimals = 8
const initial_answer = 200000000000

module.exports = {
    networkConfig,
    initial_answer,
    decimals,
    developmentChains
}