export async function successLoginMock(page) {
  await page.route('http://localhost:3001/login', async route => {
    const json = {
      statusCode: 200,
      statusMessage: 'Login success',
      user: { firstName: 'testfirst', lastName: 'testlast' },
    };
    await route.fulfill({ json });
  });
}

export async function invalidCredentialsLoginMock(page) {
  await page.route('http://localhost:3001/login', async route => {
    const json = {
      statusCode: 400,
      statusMessage: 'Login failed: bad credentials',
      user: {},
    };
    await route.fulfill({ json });
  });
}

export async function successRegistrationMock(page) {
  await page.route('http://localhost:3001/create', async route => {
    const json = {
      statusCode: 200,
      statusMessage: 'Registration success',
    };
    await route.fulfill({ json });
  });
}

export async function duplicateRegistrationMock(page) {
  await page.route('http://localhost:3001/create', async route => {
    const json = {
      statusCode: 400,
      statusMessage: 'error: account already exists',
    };
    await route.fulfill({ json });
  });
}
