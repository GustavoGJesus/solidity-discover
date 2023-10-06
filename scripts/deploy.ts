import { ethers } from "hardhat";

async function main() {
  const HelloHardHat = await ethers.getContractFactory("HelloHardHat");
  const helloHardHat = await HelloHardHat.deploy();
  
  console.log("HelloHardHat address:", await helloHardHat.getAddress(), '🥳');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
