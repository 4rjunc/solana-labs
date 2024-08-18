import "dotenv/config";
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = Keypair.generate();

console.log("keypair: ", keypair);
console.log(`The public key is: ${keypair.publicKey.toBase58()}`);
console.log(`The secret key is: ${keypair.secretKey}`);
console.log(`✅ keypair generated`);

const keypair_env = getKeypairFromEnvironment("SECRET");
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);
