import app from '../src/infra/server';
import LoginController from './infra/http/api/LoginController';
import UserController from './infra/http/api/UserController';

new UserController();
new LoginController();

app.listen(3001, () => {
    return console.log(`Express is listening at http://localhost:3001`);
});