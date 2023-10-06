// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract HelloHardHat {

    string public message = "Hello world";
    
    // reading function
    function helloWorld() public view returns(string memory) {
        return message;
    }

    // writing function
    // every writing function requires you to carry out a transaction on the blockchain
    // it is not normal to put return as a writing function
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}