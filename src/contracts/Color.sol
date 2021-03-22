pragma solidity ^0.5.0;
// pragma solidity ^0.8.0;

// Whenever we run the app, constructor executes once to create the smart contract we use ERC721Full

// this is how we import it in real projects
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ERC721Full.sol";

contract Color is ERC721Full {
    string[] public colors;
    mapping(string => bool) _colorExists;

    constructor() public ERC721Full("Color", "COLOR") {}

    // _  to indicate is a local variable
    function mint(string memory _color) public {
        // require unique color
        require(!_colorExists[_color]);
        uint _id = colors.push(_color);
        _mint(msg.sender, _id);
        _colorExists[_color] = true;

        // Take in the color & add  & tracl it
        //  call the mint func
    }
}
