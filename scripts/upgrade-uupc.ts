import { ethers, upgrades } from "hardhat";

async function main() {
  const UUPCUpgradeableMintableTokenV2 = await ethers.getContractFactory(
    "UUPCUpgradeableMintableTokenV2"
  );
  await upgrades.upgradeProxy(
    process.env.UUPC_PROXY_CONTRACT as string,
    UUPCUpgradeableMintableTokenV2
  );
  console.log("upgraded");
}

main();
