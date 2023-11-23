import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

const web3auth = new Web3Auth({
  clientId: "BLhoAFEWcWbSjN63ZCWYpv8P1G5kL8_7UwuUhqPdUnX4RSOI0SahOZk8IOiZjCbiPMpovqsQYViGs0glHH6MrFM",
  web3AuthNetwork: "sapphire_mainnet",
  chainConfig: {
    chainNamespace: "other",
  },
});

const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    uxMode: "popup",
  },
});
web3auth.configureAdapter(openloginAdapter);

await web3auth.initModal();

const web3authProvider = await web3auth.connect(); // web3auth.provider