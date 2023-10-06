const axios = require('axios')

const url = 'https://api.carbonintensity.org.uk/regional'

test('Scenario 2', async () => {
    let regions
    // 1
    const response = await axios.get(url)
    regions = response.data.data[0].regions
    // 2 - not sure what to do here?
})
