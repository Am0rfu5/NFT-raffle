# Raffle Smart Contract Project

This project is a decentralized and tamper-proof NFT raffle system using Ethereum smart contracts. Leveraging the security and randomness provided by Chainlink VRF (Verifiable Random Function) and automated execution by Chainlink Keepers, this raffle system ensures fair selection of winners and trustless operation. Additionally, it integrates an NFT minting feature, where winners can be awarded unique NFTs as prizes.

## Features

- **Entrance Fee**: Participants must pay an entrance fee to enter the raffle.
- **Chainlink VRF**: Utilizes Chainlink VRF for provably fair and verifiable random winner selection.
- **Chainlink Keepers**: Automated checking and execution of the raffle draw based on predefined conditions (e.g., time intervals).
- **NFT Minting**: Winners are awarded unique NFTs minted on-the-fly.
- **Pausable**: The contract can be paused and unpaused by the owner for maintenance or emergency stops.
- **Ownership**: Leveraging OpenZeppelin's `Ownable` for secure ownership management.

## Smart Contracts

### OracleNFT

An ERC721 token that awards unique NFTs to raffle winners. It incorporates pausable functionality for increased control over the contract's operations.

### Raffle

The main raffle contract that handles participant entry, raffle draws, and NFT minting for winners. It uses Chainlink VRF for random number generation and Chainlink Keepers for automated execution.

## Getting Started

### Prerequisites

- Node.js and npm
- An Ethereum wallet with Rinkeby testnet ETH
- A [Chainlink](https://chain.link/) subscription for VRF and Keepers

### Installation

1. Clone the repository:

```bash
git clone github.com/Am0rfu5/NFT-Raffle.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by renaming `example.env` to `.env` and filling in your values.

### Compilation

Compile the smart contracts:

```bash
npx hardhat compile
```

### Deployment

Deploy the contracts to your desired network:

```bash
npx hardhat deploy --network rinkeby
```

Optionally, deploy mock contracts for testing:

```bash
npx hardhat deploy --tags mocks --network rinkeby
```

### Running Locally

Start a local Hardhat node:

```bash
npx hardhat node
```

Interact with the deployed contract in the local network:

```bash
npx hardhat console --network localhost
```

Enter the raffle with the script provided:

```bash
npx hardhat run scripts/enterRaffle.js --network localhost
```

### Commands

- Check the current block number on Rinkeby:

```bash
npx hardhat block-number --network Rinkeby
```

- Enter the Raffle (ensure you're connected to the correct network):

```bash
npx hardhat run scripts/enterRaffle.js --network rinkeby
```

## Workflow

1. **Enter Raffle**: Participants enter the raffle by sending ETH above the entrance fee threshold.
2. **CheckUpKeep**: Chainlink Keepers periodically check if the conditions for performing a draw are met.
3. **PerformUpKeep**: If conditions are met, the raffle draw is executed, selecting a random winner.
4. **SafeMint**: The winner's address is used to mint a unique NFT as a prize.

## Contributing

Contributions are welcome! Feel free to open pull requests or issues to suggest improvements or add new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
