const VaccineTracking = artifacts.require("VaccineTracking");

contract("VaccineTracking", async accounts => {
    it("should store a vaccine batch log and get the first item from the list", async () => {
        const vaccine_batches = await VaccineTracking.deployed();
        const created = await vaccine_batches.createVaccineBatch(2929, "pfizer", "Paiz VH2", -1, "2022-12-04T22:44");
        const batches = await vaccine_batches.getVaccineBatches()
        if (batches != null){
            if(batches[batches.length-1].batch_num == 2929) {
                console.log("Vaccine Batch: ",batches[batches.length-1]);
                assert.it
            }
        }
    });
    it("should store a vaccine batch and get the last one", async () => {
        const vaccine_batches = await VaccineTracking.deployed();
        await vaccine_batches.createVaccineBatch(20, "moderna", "san lucas", 10, "2022-12-04T22:44");
        await vaccine_batches.createVaccineBatch(30, "moderna", "Peten", -20, "2022-12-04T22:44");
        
        const batches = await vaccine_batches.getVaccineBatches()
        if (batches != []){
            assert.it
            console.log("Vaccine Batch: ",batches);
        }
    });
})