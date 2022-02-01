// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./BeaconUpgradeableMintableToken.sol";

contract BeaconUpgradeableMintableTokenV2 is
    BeaconUpgradeableMintableToken,
    PausableUpgradeable
{
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
