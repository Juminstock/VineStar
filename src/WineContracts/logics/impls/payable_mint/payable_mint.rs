use openbrush::traits::DefaultEnv;
use openbrush::{
    contracts::psp34::*,
    traits::{AccountId, String},
};

#[openbrush::trait_definition]
pub trait PayableMintImpl: psp34::InternalImpl {
    /// Mint one or more NFTs wine and verify if the amount is correct
    #[ink(message, payable)]
    fn mint_wine(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
        if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
            return Err(PSP34Error::Custom(String::from("Amount isn't correct, please check")));
        }

        psp34::InternalImpl::_mint_to(self, account, id)
    }
}
