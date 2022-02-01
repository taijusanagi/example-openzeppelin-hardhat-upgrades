// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./TransparentUpgradeableMintableToken.sol";

contract TransparentUpgradeableMintableTokenV2 is
    TransparentUpgradeableMintableToken,
    PausableUpgradeable
{
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
