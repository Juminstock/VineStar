import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import WineMinterFactory from "./typedContract/constructors/WineMinter";
import WineMinter from "./typedContract/contracts/WineMinter";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";

use(chaiAsPromised);

// Create a new instance of contract
const wsProvider = new WsProvider("ws://127.0.0.1:9944");
// Create a keyring instance
const keyring = new Keyring({ type: "sr25519" });

describe("WineMinter test", () => {
  let WineMinterFactory: WineMinterFactory;
  let api: ApiPromise;
  let deployer: KeyringPair;
  
  let contract: WineMinter;
  const initialState = true;

  before(async function setup(): Promise<void> {
    api = await ApiPromise.create({ provider: wsProvider });
    deployer = keyring.addFromUri("//Alice");

    WineMinterFactory = new WineMinterFactory(api, deployer);

    contract = new WineMinter(
      (await WineMinterFactory.new(initialState)).address,
      deployer,
      api
    );
  });

  after(async function tearDown() {
    await api.disconnect();
  });
});
