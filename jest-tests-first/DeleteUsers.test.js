const axios = require('axios')

const url = 'https://reqres.in/api/users'

test('Delete user using API', async () => {
    let userId
    // if needed fetch userId from get request then delete after
    try
    {
        const userList = await axios.get(url);
        expect(userList.status).toBe(200);
        expect(userList.data).toHaveProperty('data');
        expect(typeof userList.data).toBe('object');
        expect(typeof userList.data.data).toBe('object');
        expect(userList.data.data.length).toBeGreaterThan(5);
        expect(userList.data.data[1]).toHaveProperty('id')
        userId = userList.data.data[1].id
    }
    catch (error)
    {
        expect(error).toBe(null)
    }
    
    try
    {
        const response = await axios.delete(`${url}/${userId}`);
        expect(typeof response.data).toBe('string');
        expect(response.data).toBe('');
        expect(response.status).toBe(204);
    }
    catch (error)
    {
        expect(error).toBe(null)
    }
})
