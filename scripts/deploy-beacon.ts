import { ethers, upgrades } from "hardhat";

async function main() {
  const BeaconUpgradeableMintableToken = await ethers.getContractFactory(
    "BeaconUpgradeableMintableToken"
  );

  const beacon = await upgrades.deployBeacon(BeaconUpgradeableMintableToken);
  await beacon.deployed();

  console.log("beacon deployed to:", beacon.address);
}

main();
