import { http, HttpResponse } from 'msw';

export const loginHandlers = [
  http.post('http://localhost:3001/login', async () => {
    return HttpResponse.json(
      {
        statusCode: 200,
        statusMessage: 'Login success',
        user: { firstName: 'first', lastName: 'last' },
      },
      { status: 200 }
    );
  }),
];

export const registerHandlers = [
  http.post('http://localhost:3001/create', async () => {
    return HttpResponse.json(
      {
        statusCode: 200,
        statusMessage: 'success',
      },
      { status: 200 }
    );
  }),
];
