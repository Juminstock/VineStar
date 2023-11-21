#![cfg_attr(not(feature = "std"), no_std, no_main)]
#[openbrush::implementation(PSP34, Ownable, PSP34Burnable, PSP34Mintable, PSP34Enumerable, PSP34Metadata)]

/// Use Openbrush for create a main contract function
#[openbrush::contract]
pub mod wine_minter {
    use openbrush::traits::Storage;
    use payable_mint_pkg::impls::payable_mint::*;

    /// It storage the module types from PSP34
    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct WineMinter {
        #[storage_field]
        psp34: psp34::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        enumerable: enumerable::Data
    }

    impl payable_mint::PayableMintImpl for WineMinter {}

    impl WineMinter {
        /// Create a collection and associate its metadata to it
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut _instance = Self::default();
            ownable::Internal::_init_with_owner(&mut _instance, Self::env().caller());
            psp34::Internal::_mint_to(&mut _instance, Self::env().caller(), Id::U8(1))
                .expect("Can mint");
            let collection_id = psp34::PSP34Impl::collection_id(&_instance);
            metadata::Internal::_set_attribute(
                &mut _instance,
                collection_id.clone(),
                String::from("Name"),
                String::from("Wine"),
            );
            metadata::Internal::_set_attribute(
                &mut _instance,
                collection_id,
                String::from("Symbol"),
                String::from("CWS"),
            );
            _instance
        }
    }
}