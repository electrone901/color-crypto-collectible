pragma solidity ^0.5.0;
// pragma solidity ^0.8.0;

// Whenever we run the app, constructor executes once to create the smart contract we use ERC721Full

// this is how we import it in real projects
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC721Full.sol";

contract Color is ERC721Full {
    constructor() public ERC721Full("Color", "COLOR") {}
}
