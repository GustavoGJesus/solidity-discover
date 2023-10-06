import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: process.env.MUMBAI_URL_RPC || "",
      accounts: process.env.ACCOUNT_PRIVATE_KEY !== undefined ? [process.env.ACCOUNT_PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey: process.env.POLYGON_SCAN_API_KEY,
 }
};

export default config;
