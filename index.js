const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "",
    // ...and any other configuration
  });

  const address = "0xA3A45416d7bf7180E3beD6751748b5c250788578";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.transaction.getWalletTransactions({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
