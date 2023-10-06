const axios = require('axios')

const url = 'https://reqres.in/api/users'

test('Fetch users list from API', async () => {
    try
    {
        const response = await axios.get(url);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('data');
        expect(typeof response.data).toBe('object');
        expect(typeof response.data.data).toBe('object');
        expect(response.data.data.length).toBeGreaterThan(5);
    }
    catch (error)
    {
        expect(error).toBe(null)
    }
})

test('Handle Api error', async () => {
    try
    {
        await axios.get(`${url}/nonexistent`);
    }
    catch (error)
    {
        expect(error.response.status).toBe(404);     
    }
})
