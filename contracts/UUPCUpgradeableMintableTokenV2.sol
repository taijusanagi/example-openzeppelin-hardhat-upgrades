// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./UUPCUpgradeableMintableToken.sol";

contract UUPCUpgradeableMintableTokenV2 is
    UUPCUpgradeableMintableToken,
    PausableUpgradeable
{
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
