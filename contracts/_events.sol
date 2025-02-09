// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

event Log(string message);
event FeeUpdated(uint8);
event EmojiAdded(bytes32 indexed emojiId, string metadata,string indexed  name, string indexed emoji, uint256 price, bool status);
event EmojiUpdated(bytes32 indexed emojiId, string indexed  name, string indexed emoji, uint256 price);
event Reacted(bytes32 indexed emojiId, address indexed  from, address indexed  to, uint256 price,uint256 dt);