# ChainSpend-Arc

An on-chain expense tracking application built on Arc Testnet.

## Overview

ChainSpend-Arc enables users to securely record expenses on-chain with details such as amount, token, category, note, and timestamp. By storing expenses on-chain, the application provides transparency, immutability, and an auditable transaction history.

## Features

- Record expenses on-chain
- Categorize expenses
- Add notes to each expense
- Immutable expense history
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

### Clone the repository

git clone https://github.com/idriskinze86/ChainSpend-Arc.git

### Navigate to the project

cd ChainSpend-Arc

### Install dependencies

npm install

## Environment Variables

Create a .env file in the project root:

RPC_URL=https://rpc.blockdaemon.testnet.arc.network
PRIVATE_KEY=your_private_key_here

> Important: Never commit your real private key to GitHub.

## Compile the Contract

node scripts/compile.js

## Deploy the Contract

node scripts/deploy.js

## Contract Verification

The contract has been successfully verified on ArcScan.

Verified Contract Address:

0x313FFf8332B6028D8793979DF16eC08793053dda

## Future Improvements

- Expense analytics dashboard
- USDC payment support
- Better filtering and search
- Multi-user support
- Mainnet deployment

## License

MIT
