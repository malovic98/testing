const axios = require('axios')

const url = 'https://api.carbonintensity.org.uk/regional'

test('Scenario 3', async () => {
    let regions
    // 1
    const response = await axios.get(url)
    regions = response.data.data[0].regions
    const regionsByFuelType = {};

    regions.forEach(region => {
      region.generationmix.forEach(fuel => {
        const { fuel: fuelType, perc } = fuel;

        if (!regionsByFuelType[fuelType]) {
          regionsByFuelType[fuelType] = [];
        }

        regionsByFuelType[fuelType].push({
          region: region.shortname,
          perc: perc
        });
      });
    });

    for (const fuelType in regionsByFuelType) {
      regionsByFuelType[fuelType] = regionsByFuelType[fuelType]
        .sort((a, b) => b.perc - a.perc)
        .slice(0, 5);
    }
    // 2
    console.log(regionsByFuelType);
})
