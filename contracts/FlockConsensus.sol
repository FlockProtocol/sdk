// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FlockConsensus {
    mapping(address => uint256) public votes;

    event Voted(address indexed user, uint256 value);

    function vote(uint256 value) public {
        votes[msg.sender] = value;
        emit Voted(msg.sender, value);
    }

    function getVote(address user) public view returns (uint256) {
        return votes[user];
    }
}
