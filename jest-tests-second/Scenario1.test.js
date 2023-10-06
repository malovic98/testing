const axios = require('axios')

const url = 'https://api.carbonintensity.org.uk/regional'

test.skip('Scenario 1', async () => {
    let regions
    // 1
    const response = await axios.get(url)
    regions = response.data.data[0].regions
    regions.forEach(element => {
        // 2
        console.log(element.shortname, 'have', element.intensity.index, 'intensity -', element.intensity.forecast);
    });
    // 3
    regions.sort((a, b) => b.intensity.forecast - a.intensity.forecast)
    regions.forEach(element => {
        //4
        console.log(element.intensity.forecast, '-', element.shortname);
    });
})
