//add comment
import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";

import "dotenv/config";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
  console.log("Please provide a public key");
  process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET");

console.log(`senderKeypair: ${senderKeypair}`);
