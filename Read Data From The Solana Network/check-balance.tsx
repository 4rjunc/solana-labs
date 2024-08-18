import { PublicKey, LAMPORTS_PER_SOL, Connection } from "@solana/web3.js";
import { getDomainKey } from "@bonfida/spl-name-service";

console.log("Resolving Deatails of famous wallets");
const FAMOUS_WALLETS = ["toly.sol", "shaq.sol", "mccann.sol"];
FAMOUS_WALLETS.map(async (wallet) => {
  const { pubkey } = await getDomainKey(wallet);
  console.log(`pubkey ${wallet}`, pubkey.toBase58());
});

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a wallet address to check the balance");
}

const publicKey = new PublicKey(suppliedPublicKey);
const network = process.argv[3];

let connection; // Declare connection variable outside the if statements

if (network === "-d") {
  connection = new Connection("https://api.devnet.solana.com", "confirmed");
} else if (network === "-m") {
  connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed",
  );
} else {
  throw new Error(
    "Please specify a valid network: -d for devnet or -m for mainnet",
  );
}

// Wrap the balance checking in an async function
async function checkBalance() {
  try {
    const balanceInLamport = await connection.getBalance(publicKey);
    const balanceInSol = balanceInLamport / LAMPORTS_PER_SOL;
    console.log(
      `☘️  Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol} SOL`,
    );
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

// Call the async function
checkBalance();
