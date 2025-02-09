// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./_pausable.sol";
import "./_ownable.sol";
import "./_events.sol";
import "./_errors.sol";

/// @title Giftmoji
/// @author Aratta Labs
/// @notice Giftmoji contract v1.0
/// @dev You will find the deployed contract addresses in the repo
/// @custom:emoji 🆙💋🦾✨
/// @custom:security-contact atenyun@gmail.com
contract EmojiGift is Ownable(msg.sender), Pausable {
    using Counters for Counters.Counter;
    Counters.Counter public _emojiCounter;
    Counters.Counter public _reactionCounter;
    // Fee
    uint8 public fee;

    struct ReactStruct {
        address sender;
        bytes32 emojiId;
        uint256 price;
        bytes message;
        uint256 dt;
    }

    mapping(address => ReactStruct[]) public reactPool;

    struct EmojiStruct {
        bytes32 emojiId;
        string metadata;
        string name;
        string emoji;
        uint256 price;
        bool status;
    }

    EmojiStruct[] public emojiPool;

    constructor(uint8 _fee) {
        fee = _fee;
    }

    ///@notice Retrieve index of emoji
    /// @dev Retrieve the index of the emojiPool
    /// @param _emojiId Emoji ID
    /// @return uint256 Index in array
    function _getEmojiDetail(bytes32 _emojiId) internal view returns (uint256) {
        for (uint256 i = 0; i < emojiPool.length; i++) if (emojiPool[i].emojiId == _emojiId) return i;
        revert("App Id Not Found");
    }

    // @notice Add new emoji
    function addEmoji(
        string memory _metadata,
        string memory _name,
        string memory _emoji,
        uint256 _price
    ) public onlyOwner returns (bytes32 lastEmojiId) {
        bytes32 _emojiId = bytes32(_emojiCounter.current());

        emojiPool.push(EmojiStruct(_emojiId, _metadata, _name, _emoji, _price, true));
        _emojiCounter.increment();

        emit EmojiAdded(_emojiId, _metadata, _name, _emoji, _price, true);
        return _emojiId;
    }

    // @notice Update emoji
    function updateEmoji(
        bytes32 _emojiId,
        string memory _metadata,
        string memory _name,
        string memory _emoji,
        uint256 _price,
        bool _status
    ) public onlyOwner returns (bytes32 updatedId) {
        uint256 emojiIndex = _getEmojiDetail(_emojiId);

        emojiPool[emojiIndex].metadata = _metadata;
        emojiPool[emojiIndex].name = _name;
        emojiPool[emojiIndex].emoji = _emoji;
        emojiPool[emojiIndex].price = _price;
        emojiPool[emojiIndex].status = _status;

        emit EmojiUpdated(_emojiId, _name, _emoji, _price);
        return _emojiId;
    }

    /// @notice Update fee
    /// @dev Fee can be 0-100
    /// @param _fee new value
    function updateFee(uint8 _fee) public onlyOwner {
        assert(fee < 100);
        fee = _fee;
        emit FeeUpdated(_fee);
    }

    /// @notice Get all user reactions
    function getAllUserReaction(address _addr) public view returns (ReactStruct[] memory) {
        return reactPool[_addr];
    }

    /// @notice Get all reactions of a emoji
    function totalOfEmojiReaction(address _addr, bytes32 _emojiId) public view returns (uint256) {
        uint256 counter = 0;
        for (uint256 i = 0; i < reactPool[_addr].length; i++) if (reactPool[_addr][i].emojiId == _emojiId) counter++;
        return counter;
    }

    /// @notice Get all emojies
    function getAllEmoji() public view returns (EmojiStruct[] memory) {
        return emojiPool;
    }

    /// @notice Gift emoji
    function react(
        address _addr,
        bytes32 _emojiId,
        bytes memory _message
    ) public payable whenNotPaused returns (bool) {
        // Users are not allowed to send emojis to themselves.
        assert(_msgSender() != _addr);

        uint256 emojiIndex = _getEmojiDetail(_emojiId);
        EmojiStruct memory emoji = emojiPool[emojiIndex];

        if (emoji.price > 0) {
            // Check the listed item price, it can be FREE too.
            if (msg.value < emoji.price) revert InsufficientBalance(msg.value);
            (bool success, ) = _addr.call{value: calcPercentage(msg.value, 100 - fee)}("");
            require(success, "Failed to send Ether to the user!");

            // Send to the owner
            (bool success2, ) = _addr.call{value: calcPercentage(msg.value, fee)}("");
            require(success2, "Failed to send Ether to the owner!");
        }

        reactPool[_addr].push(ReactStruct(_msgSender(), _emojiId, msg.value, _message, block.timestamp));

        _reactionCounter.increment();

        emit Reacted(_emojiId, _msgSender(), _addr, msg.value, block.timestamp);
        return true;
    }

    ///@notice calcPercentage percentage
    ///@param _amount The total amount
    ///@param _bps The precentage
    ///@return percentage %
    function calcPercentage(uint256 _amount, uint256 _bps) private pure returns (uint256) {
        require((_amount * _bps) >= 100);
        return (_amount * _bps) / 100;
    }

    ///@notice Withdraw the balance from this contract to the owner's address
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = owner().call{value: amount}("");
        require(success, "Failed");
    }

    ///@notice Transfer balance from this contract to input address
    function transferBalance(address payable _to, uint256 _amount) public onlyOwner {
        // Note that "to" is declared as payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed");
    }

    /// @notice Return the balance of this contract
    function getBalance() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    /// @notice Pause mint
    function pause() public onlyOwner {
        _pause();
    }

    /// @notice Unpause mint
    function unpause() public onlyOwner {
        _unpause();
    }
}
