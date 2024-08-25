import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { IntroToAnchorDevelopment } from "../target/types/intro_to_anchor_development";

describe("intro-to-anchor-development", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.IntroToAnchorDevelopment as Program<IntroToAnchorDevelopment>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
