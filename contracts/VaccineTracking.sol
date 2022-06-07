// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract VaccineTracking {

    struct vaccine_batch_log{
        uint batch_num;
        string vaccine_type;
        string location;
        int temperature;
        address user;
        string timestamp;
    }

    vaccine_batch_log[] public vaccine_batch_logs;

    function createVaccineBatch (
        uint batch_num,
        string memory vaccine_type,
        string memory location,
        int temperature,
        string memory timestamp
    ) public {

        vaccine_batch_logs.push(vaccine_batch_log({
            batch_num: batch_num,
            vaccine_type: vaccine_type,
            location: location,
            temperature: temperature,
            user: msg.sender,
            timestamp: timestamp
        }));

    }

    function getVaccineBatches() public view returns (vaccine_batch_log[] memory) {
        return vaccine_batch_logs;
    }

}