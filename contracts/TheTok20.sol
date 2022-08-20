// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TheTok20 is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("TheTok", "TTK") {
        _mint(msg.sender, 10000 * 10**decimals());
    }

    event Minted(address to, uint256 amount);


    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(amount >= 1, "Minimum amount must be at least 1");
        _mint(to, amount);
        emit Minted(to, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
