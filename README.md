# ChainSpend-Arc

## Overview

ChainSpend-Arc is an on-chain expense tracking application deployed on Arc Testnet. It enables users to securely record expenses on-chain with details such as amount, token, category, note, and timestamp.

The project demonstrates transparent and immutable expense tracking using smart contracts on Arc.

## Features

- Record expenses on-chain
- Categorize expenses
- Store notes for each expense
- Immutable transaction history
- Wallet integration
- Deployed and verified on Arc Testnet

## Smart Contract

Network: Arc Testnet

Contract Address:

0x313FFf8332B6028D8793979DF16eC08793053dda

## Tech Stack

- Solidity
- Ethers.js
- Node.js
- JavaScript
- Arc Testnet

## Project Structure

contracts/
frontend/
scripts/
build/

## Installation

Clone the repository:

git clone https://github.com/idriskinze86/ChainSpend-Arc.git
Navigate into the project:

cd ChainSpend-Arc
Install dependencies:

npm install

## Environment Variables

Create a .env file in the project root and add:

RPC_URL=https://rpc.blockdaemon.testnet.arc.network
PRIVATE_KEY=your_private_key_here

## Compile the Contract

node scripts/compile.js

## Deploy the Contract

node scripts/deploy.js

## Verify the Contract

The contract has already been verified on ArcScan.

Contract Address:

0x313FFf8332B6028D8793979DF16eC08793053dda

## Future Improvements

- Expense analytics dashboard
- USDC payment support
- Better filtering and search
- Multi-user support
- Mainnet deployment

## License

MIT
