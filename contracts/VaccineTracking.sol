// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract VaccineTracking {

    struct vaccine_batch{
        int64 batch_num;
        string vaccine_type;
        string location;
        int temperature;
        address user;
        int64 received_at;
        int64 delivered_at;
    }

    mapping(int64 => vaccine_batch) vaccine_batch_logs;

    function createVaccineBatch (
        int64 batch_num, 
        string memory vaccine_type, 
        string memory location, 
        int temperature, 
        int64 received_at, 
        int64 delivered_at
        ) public {

        vaccine_batch storage new_vaccine_batch = vaccine_batch_logs[batch_num];
        new_vaccine_batch.batch_num = batch_num;
        new_vaccine_batch.vaccine_type = vaccine_type;
        new_vaccine_batch.location = location;
        new_vaccine_batch.temperature = temperature;
        new_vaccine_batch.user = msg.sender;
        new_vaccine_batch.received_at = received_at;
        new_vaccine_batch.delivered_at = delivered_at;

    }

    function getVaccineBatch(int64 batchNum) public view returns (
        int64,
        string memory,
        string memory,
        int,
        address,
        int64,
        int64
    ){
        vaccine_batch storage batch = vaccine_batch_logs[batchNum];
        return(
            batch.batch_num,
            batch.vaccine_type,
            batch.location,
            batch.temperature,
            batch.user,
            batch.received_at,
            batch.delivered_at
        );
    }

    // function getVaccineBatchLogs (batch_num) public {

    // }

}