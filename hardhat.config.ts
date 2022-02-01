import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";

import * as dotenv from "dotenv";
dotenv.config();

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};

export default {
  solidity: {
    compilers: [{ version: "0.8.2", settings }],
  },
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
