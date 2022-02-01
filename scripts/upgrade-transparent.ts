import { ethers, upgrades } from "hardhat";

async function main() {
  const TransparentUpgradeableMintableTokenV2 = await ethers.getContractFactory(
    "TransparentUpgradeableMintableTokenV2"
  );

  await upgrades.upgradeProxy(
    process.env.TRANSPARENT_PROXY_CONTRACT as string,
    TransparentUpgradeableMintableTokenV2
  );
  console.log("upgraded");
}

main();
