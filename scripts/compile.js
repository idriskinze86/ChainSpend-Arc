import fs from "fs";
import solc from "solc";

const source = fs.readFileSync("contracts/ExpenseTracker.sol", "utf8");

const input = {
  language: "Solidity",
  sources: {
    "ExpenseTracker.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  console.log(output.errors);
}

const contract = output.contracts["ExpenseTracker.sol"]["ExpenseTracker"];

if (!fs.existsSync("build")) {
  fs.mkdirSync("build", { recursive: true });
}

fs.writeFileSync(
  "build/ExpenseTracker.json",
  JSON.stringify(contract, null, 2),
);

// 👇 Copy ABI to frontend automatically
fs.writeFileSync(
  "frontend/src/lib/abi.json",
  JSON.stringify(contract.abi, null, 2),
);

console.log("✅ Compiled successfully!");
console.log("✅ Frontend ABI updated!");
