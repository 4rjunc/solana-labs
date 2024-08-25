use anchor_lang::prelude::*;

declare_id!("LN6QNbzSeFWg4ggXDBpvwJBSCTaF5uphcFB7Axh3KrT");

#[program]
pub mod intro_to_anchor_development {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
