Commands:
npx hardhat block-number --network Rinkeby
npx hardhat deploy
npx hardhat deploy --tags mocks

Running locally:
npx hardhat node -> to deploy locally
npx hardhat console --network localhost -> to interact with contract deployed
npx hardhat run scripts/enterRaffle.js --network localhost -> to enter lottery

Workflow:
Enter Raffle -> CheckUpKeep -> PerformUpKeep -> SafeMint(winner address)