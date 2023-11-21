#![cfg_attr(not(feature = "std"), no_std, no_main)]
#[openbrush::implementation(PSP34, PSP34Metadata, PSP34Enumerable, Ownable, PSP34Burnable)]

/// Use Openbrush for create a main contract function
#[openbrush::contract]
pub mod wine_contract {
    use ink::codegen::{
        EmitEvent,
        Env,
    };
    use openbrush::{
        contracts::{
            ownable,
            psp34::{
                extensions::{
                    enumerable,
                    metadata,
                },
                PSP34Impl,
            },
            reentrancy_guard,
        },
        traits::Storage,
    };
    use payable_mint_pkg::impls::payable_mint::{
        payable_mint::*,
        *,
    };

    /// It storage the module types from PSP34
    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct WineContract {
        #[storage_field]
        psp34: psp34::Data,
        #[storage_field]
        guard: reentrancy_guard::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        payable_mint: types::Data,
        #[storage_field]
        enumerable: enumerable::Data,
    }

    /// Event emitted when a wine token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        id: Id,
    }

    /// Event emitted when a wine token approve occurs.
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        from: AccountId,
        #[ink(topic)]
        to: AccountId,
        #[ink(topic)]
        id: Option<Id>,
        approved: bool,
    }

    // Override event emission methods
    #[overrider(psp34::Internal)]
    fn _emit_transfer_event(&self, from: Option<AccountId>, to: Option<AccountId>, id: Id) {
        self.env().emit_event(Transfer { from, to, id });
    }

    #[overrider(psp34::Internal)]
    fn _emit_approval_event(&self, from: AccountId, to: AccountId, id: Option<Id>, approved: bool) {
        self.env().emit_event(Approval {
            from,
            to,
            id,
            approved,
        });
    }

    impl payable_mint_pkg::impls::payable_mint::payable_mint::Internal for WineContract {}
    impl PayableMintImpl for WineContract {}

    impl WineContract {
        /// Create the initial state for the contract
        #[ink(constructor)]
        pub fn new(
            name: String,
            symbol: String,
            base_uri: String,
            max_supply: u64,
            price_per_mint: Balance,
        ) -> Self {

            let mut instance = Self::default();
            let caller = instance.env().caller();
            ownable::InternalImpl::_init_with_owner(&mut instance, caller);
            let collection_id = PSP34Impl::collection_id(&instance);

            metadata::InternalImpl::_set_attribute(
                &mut instance,
                collection_id.clone(),
                String::from("Name"),
                name,
            );

            metadata::InternalImpl::_set_attribute(
                &mut instance,
                collection_id.clone(),
                String::from("Symbol"),
                symbol,
            );

            metadata::InternalImpl::_set_attribute(
                &mut instance,
                collection_id,
                String::from("Base URI"),
                base_uri,
            );
            
            instance.payable_mint.max_supply = max_supply;
            instance.payable_mint.price_per_mint = price_per_mint;
            instance.payable_mint.last_token_id = 0;
            instance.payable_mint.max_amount = 6;
            instance
        }
    }
}