import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("EbN3JqZ2EKGGVagmvQpUuUPopEMDaXq4yXbLNqhaXEZD");
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`✅ Connected! ${address} : ${balanceInSol}`);
