import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloHardHat", function () {
  // this function build the process of loading of contract, deploy of contract in ambient environment, generate test accounts
  async function deployFixture() {
    // tests accounts
    const [owner, otherAccount] = await ethers.getSigners();

    const HelloHardHat = await ethers.getContractFactory("HelloHardHat");
    const contract = await HelloHardHat.deploy();

    return { contract, owner, otherAccount };
  }

  // it for each test
  it("Should get Hello World", async function () {
    const {  contract, owner, otherAccount } = await loadFixture(deployFixture);

    // expect for test the result of test 
    expect(await contract.helloWorld()).to.equal("Hello world");
  });

  it("Should set new message", async function () {
    const {  contract, owner, otherAccount } = await loadFixture(deployFixture);
    await contract.setMessage("Hello solidity")

    expect(await contract.helloWorld()).to.equal("Hello solidity");
  });
});
