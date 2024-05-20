import app from '../src/infra/server';
import TestController from './infra/http/api/TestController';

new TestController();

app.listen(3001, () => {
    return console.log(`Express is listening at http://localhost:3001`);
});