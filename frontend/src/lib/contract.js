import { BrowserProvider, Contract } from "ethers";
import abi from "./abi.json";

const CONTRACT_ADDRESS = "0x708ac00dAcd90D898F14843D339Eb6D0aE2fB743";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("Wallet not found");
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new Contract(CONTRACT_ADDRESS, abi, signer);
}
