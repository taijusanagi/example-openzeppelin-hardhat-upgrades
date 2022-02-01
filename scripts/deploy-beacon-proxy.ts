import { ethers, upgrades } from "hardhat";

async function main() {
  const BeaconUpgradeableMintableToken = await ethers.getContractFactory(
    "BeaconUpgradeableMintableToken"
  );

  const proxy = await upgrades.deployBeaconProxy(
    process.env.BEACON_ADDRESS as string,
    BeaconUpgradeableMintableToken
  );
  await proxy.deployed();

  console.log("proxy deployed to:", proxy.address);
}

main();
