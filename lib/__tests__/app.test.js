const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('should respond to the / route', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });
});
