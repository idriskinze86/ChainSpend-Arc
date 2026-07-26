# 💸 ChainSpend

ChainSpend is a decentralized Web3 expense tracker that enables users to securely record, organize, and manage crypto expenses directly on-chain.

This version is powered by Arc Testnet, showcasing fast, transparent, and wallet-specific expense tracking on Arc's EVM-compatible infrastructure.

---

## 🌐 Live Demo

Vercel Deployment:

https://chain-spend-arc.vercel.app/

Experience ChainSpend-Arc live on Arc Testnet by connecting an EVM-compatible wallet such as Rabby Wallet.

## ✨ Features

- 🔐 Wallet-based authentication
- 💰 Record crypto expenses on-chain
- 📂 Categorize expenses
- 📝 Add notes to every expense
- 📊 Dashboard showing total expenses and total spending
- 🔍 Search expense history
- 📤 Export expenses as CSV
- ⚡ Powered by Arc Testnet

---

## 🚀 Why Arc?

Arc provides a secure and EVM-compatible environment that enables developers to build decentralized applications using familiar Ethereum tooling.

ChainSpend leverages Arc to provide:

- Transparent on-chain expense records
- Wallet-specific expense history
- Secure transaction storage
- Fast and reliable user experience
- A scalable foundation for future growth

---

## 🌍 Vision

ChainSpend is built on Arc Testnet today, with an architecture designed to support additional EVM-compatible networks in the future.

Our goal is to provide a seamless, transparent, and secure expense tracking experience that can scale across multiple blockchain ecosystems while maintaining a consistent user experience.

---

## 🛣️ Roadmap

- ✅ Arc Testnet (Current)
- 🔄 Monad Testnet
- 🔄 Ethereum Sepolia
- 🔄 Additional EVM-compatible networks

---

## 📡 Live Deployment

| Network     | Contract Address                           |
| ----------- | ------------------------------------------ |
| Arc Testnet | 0x72EC997ffB25D63F430A95c69a0B93F5F2d90131 |

---

## 📁 Project Structure

ChainSpend-Arc/
├── contracts/
│ └── ExpenseTracker.sol
├── scripts/
│ ├── compile.js
│ └── deploy.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── lib/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ └── index.html
├── build/
├── .env
├── package.json
└── README.md

---

## 🛠️ Tech Stack

- Solidity
- React
- Vite
- Ethers.js
- Rabby Wallet
- Arc Testnet

---

## 🌐 Clone the Repository

git clone https://github.com/idriskinze86/ChainSpend-Arc.git
cd ChainSpend-Arc

---

## ⚙️ Environment Variables

Create a .env file in the project root.

RPC_URL=https://rpc.blockdaemon.testnet.arc.network
PRIVATE_KEY=YOUR_PRIVATE_KEY

> ⚠️ Never commit your private key or other secrets to GitHub.

---

## 🚀 Installation

### Install project dependencies

npm install

### Install frontend dependencies

cd frontend
npm install

### Start the frontend

npm run dev

### Compile the smart contract

cd ..
node scripts/compile.js

### Deploy the smart contract

## node scripts/deploy.js

## 📜 Smart Contract

Contract Name

ExpenseTracker

### Core Functions

- addExpense() — Records a new expense on-chain.
- getExpense() — Retrieves an expense by index.
- getExpenseCount() — Returns the total number of expenses for the connected wallet.

Each wallet maintains its own independent expense history, ensuring user-specific records while keeping all data transparent and verifiable on-chain.

---

## 🌐 Network Configuration

| Property        | Value       |
| --------------- | ----------- |
| Network         | Arc Testnet |
| Chain ID        | 5042002     |
| Currency Symbol | ARC         |

---

## 📖 How It Works

1. Connect your EVM wallet (Rabby or another compatible wallet).
2. Switch to Arc Testnet.
3. Enter:
   - Amount
   - Token
   - Category
   - Note
4. Submit the transaction.
5. Confirm the transaction in your wallet.
6. View your on-chain expense history.
7. Search previous expenses.
8. Export expenses as a CSV file.

---

## 🔮 Future Improvements

- 🌐 Automatic multi-network detection
- 🔄 Seamless multi-chain support
- 📈 Spending analytics and charts
- 📅 Monthly expense reports
- 💼 Budget planning and alerts
- 🤖 AI-powered spending insights
- 🔗 Cross-chain expense synchronization

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.
Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 🔗 Project Links

- 🌐 Live Demo: https://chain-spend-arc.vercel.app/
- 💻 GitHub Repository: https://github.com/idriskinze86/ChainSpend-Arc
- ⛓️ Network: Arc Testnet

## 📄 License

This project is licensed under the MIT License.
