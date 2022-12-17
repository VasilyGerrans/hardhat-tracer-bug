// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IAavePool.sol";
import "./IERC20.sol";
import "./IWETH.sol";

contract TracerBreaker {
    function breaker(
        address aavePool,
        address asset,
        uint256 amount,
        uint16 loopNumber
    ) external payable {
        IWETH(asset).deposit{ value: msg.value }();
        IAavePool pool = IAavePool(aavePool);
        IERC20(asset).approve(aavePool, type(uint256).max);
        for (uint16 i = 0; i < loopNumber; i++) {
            pool.supply(asset, amount, address(this), 0);
            (,,,,,uint256 healthFactor) = pool.getUserAccountData(address(this));
            console.log(healthFactor);
            pool.withdraw(asset, amount, address(this));
        }
    }
}
