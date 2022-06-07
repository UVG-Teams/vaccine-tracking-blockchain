const VaccineTracking = artifacts.require("VaccineTracking");

contract("VaccineTracking", async accounts => {
    it("should store a vaccine batch log", async () => {
        const vaccine_batches = await VaccineTracking.deployed();
        const created = await vaccine_batches.createVaccineBatch(10, "phizer", "Paiz VH2", 34, 19928, 19993);
        const lastbatch = await vaccine_batches.getVaccineBatch(10)
        if (lastbatch != null){
            assert.it
            console.log("Vaccine Batch: ",lastbatch); 
             
        }
    });
})