import { ethers, upgrades } from "hardhat";

async function main() {
  const BeaconUpgradeableMintableTokenV2 = await ethers.getContractFactory(
    "BeaconUpgradeableMintableTokenV2"
  );
  await upgrades.upgradeBeacon(
    process.env.BEACON_ADDRESS as string,
    BeaconUpgradeableMintableTokenV2
  );
  console.log("upgraded");
}

main();
