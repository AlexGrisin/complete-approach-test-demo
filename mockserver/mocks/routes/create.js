module.exports = [
  {
    id: 'create', // route id
    url: '/create', // url in express format
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
            if (req.body?.userName === 'existing') {
              response = {
                statusCode: 400,
                statusMessage: 'error: account already exists',
              };
            } else {
              response = {
                statusCode: 200,
                statusMessage: 'Registration success',
              };
            }
            res.send(response);
          },
        },
      },
    ],
  },
];
