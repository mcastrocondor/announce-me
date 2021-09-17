const { TestWatcher } = require("jest");
const userController = require('../controllers/userController');
const app = require('../index');


describe("Add user function", () => {
    test("Create user", async () => {
        const user = {
            name: 'Meli2 Arias',
            username: 'meli1234',
            password: 'password'
        };
        const res = await request(app)
        .post('/users')
        .send(user);
      
      expect(res.body.name).toBe(user.name);
      expect(res.statusCode).toBe(200);
        
    });
});