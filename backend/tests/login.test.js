const request = require('supertest');
const app = require('../src/app');

describe('Test login path', () => {
  test('it should return successful login', async () => {
    const response = await request(app).post('/login').send({
      user: 'testUser',
      password: 'password',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toStrictEqual({ firstName: 'testfirst', lastName: 'testlast' });
  });

  test('it should return invalid credentials', async () => {
    const response = await request(app).post('/login').send({
      user: 'invaliduser',
      password: 'password',
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.user).toStrictEqual({});
  });

  test('it should return missing credentials', async () => {
    const response = await request(app).post('/login').send({
      user: '',
      password: 'password',
    });
    expect(response.statusCode).toBe(404);
    expect(response.body.user).toStrictEqual({});
  });
});
