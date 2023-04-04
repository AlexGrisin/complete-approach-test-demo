// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// user data
const USER = { firstName: 'testfirst', lastName: 'testlast' };

module.exports = [
  {
    id: 'login', // route id
    url: '/login', // url in express format
    method: 'POST', // HTTP method
    variants: [
      {
        id: 'middleware', // variant id
        type: 'middleware', // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            console.log(req.body);
            res.status(200);
            let response = {};
            if (req.body?.userName === 'invalid') {
              response = {
                statusCode: 400,
                statusMessage: 'Login failed: bad credentials',
                user: {},
              };
            } else {
              response = {
                statusCode: 200,
                statusMessage: 'Login success',
                user: USER,
              };
            }
            res.send(response);
          },
        },
      },
    ],
  },
];
