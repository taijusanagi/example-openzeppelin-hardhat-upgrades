import { ethers, upgrades } from "hardhat";

async function main() {
  const UUPCUpgradeableMintableToken = await ethers.getContractFactory(
    "UUPCUpgradeableMintableToken"
  );
  const proxy = await upgrades.deployProxy(UUPCUpgradeableMintableToken);
  await proxy.deployed();
  console.log("proxy deployed to:", proxy.address);
}

main();
