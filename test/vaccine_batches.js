const VaccineTracking = artifacts.require("VaccineTracking");

contract("VaccineTracking", async accounts => {
    it("should store a vaccine batch log", async () => {
        const vaccine_batches = await VaccineTracking.deployed();
        const created = await vaccine_batches.createVaccineBatch(10, "phizer", "Paiz VH2", 34, 19928, 19993);
        const batch = await vaccine_batches.getVaccineBatch(1)
        if (batch != null){
            assert.it
            console.log("Vaccine Batch: ",batch); 
             
        }
    });
    it("should store a vaccine batch and get the last one", async () => {
        const vaccine_batches = await VaccineTracking.deployed();
        await vaccine_batches.createVaccineBatch(20, "moderna", "san lucas", 39, 19925, 21003);
        await vaccine_batches.createVaccineBatch(30, "moderna", "Peten", 39, 19924, 22007);

        const lastbatch = await vaccine_batches.getLastVaccineBatch()
        if (lastbatch != null){
            assert.it
            console.log("Vaccine Batch: ",lastbatch);
        }
    });
})