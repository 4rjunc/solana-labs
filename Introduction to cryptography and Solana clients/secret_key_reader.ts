import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);
