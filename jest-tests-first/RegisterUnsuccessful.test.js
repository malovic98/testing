const axios = require('axios')

const url = 'https://reqres.in/api/register​'

test('Register unsuccessful', async () => {
    const params = {}

    try
    {
        const response = await axios.post(url, params)
    
        expect(response.status).toBe(201);
        expect(typeof response.data).toBe('object');
        expect(response.data).toHaveProperty('id');
    }
    catch (error)
    {
        expect(error).toBe(null)
    }
})
