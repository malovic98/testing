const axios = require('axios')

const url = 'https://reqres.in/api/users?delay=5'
jest.setTimeout(6000)

test('Delayed response API', async () => {
    try
    {
        const delay = 5000
        const startTime = Date.now()
        const response = await axios.get(url);
        const endTime = Date.now()
        const differenceTime = endTime - startTime;
        expect(differenceTime).toBeGreaterThanOrEqual(delay)
        expect(response.data).toHaveProperty('data')        
    }
    catch (error)
    {
        expect(error).toBe(null)
    }
})
