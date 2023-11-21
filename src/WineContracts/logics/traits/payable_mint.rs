use openbrush::{
    contracts::{
        psp34::PSP34Error,
        psp34::extensions::enumerable::*
    },
    traits::{
        AccountId
    }
};

#[openbrush::wrapper]
pub type PayableMintRef = dyn PayableMint;

#[openbrush::trait_definition]
pub trait PayableMint {
    /// Mint one or more NFTs wine and verify if the amount is correct
    #[ink(message, payable)]
    fn mint_wine(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error>;
}