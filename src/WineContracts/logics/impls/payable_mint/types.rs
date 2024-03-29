use openbrush::traits::{
    Balance,
    String,
};

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    pub last_token_id: u64,
    pub collection_id: u32,
    pub max_supply: u64,
    pub price_per_mint: Balance,
    pub max_amount: u64,
}

#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum Shiden34Error {
    BadMintValue,
    CannotMintZeroTokens,
    CollectionIsFull,
    TooManyTokensToMint,
    WithdrawalFailed,
}

impl Shiden34Error {
    pub fn as_str(&self) -> String {
        match self {
            Shiden34Error::BadMintValue => String::from("Amount incorrect, please check"),
            Shiden34Error::CannotMintZeroTokens => String::from("Cannot mint zero tokens"),
            Shiden34Error::CollectionIsFull => String::from("All wines have been sold"),
            Shiden34Error::TooManyTokensToMint => String::from("Too many wines to mint"),
            Shiden34Error::WithdrawalFailed => String::from("Withdrawal failed :("),
        }
    }
}
