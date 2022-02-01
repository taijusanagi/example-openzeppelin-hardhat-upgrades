import { ethers, upgrades } from "hardhat";

async function main() {
  const TransparentUpgradeableMintableToken = await ethers.getContractFactory(
    "TransparentUpgradeableMintableToken"
  );

  const proxy = await upgrades.deployProxy(TransparentUpgradeableMintableToken);
  await proxy.deployed();
  console.log("proxy deployed to:", proxy.address);
}

main();
