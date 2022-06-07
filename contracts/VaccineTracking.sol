// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract VaccineTracking {

    struct vaccine_batch_log{
        int64 batch_num;
        string vaccine_type;
        string location;
        int temperature;
        address user;
        int64 timestamp;
    }

    vaccine_batch_log[] public vaccine_batch_logs;

    function createVaccineBatch (
        int64 batch_num, 
        string memory vaccine_type, 
        string memory location, 
        int temperature, 
        int64 timestamp
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
        return(vaccine_batch_logs);
    }

}