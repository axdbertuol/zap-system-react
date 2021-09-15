const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/auth-user", (req, res) => {
  const { email, password } = req.body;
  try {
    const { users } = router.db.getState();
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );
    if (userFound) {
      res.status(200).send({ ...userFound, password: null });
    } else {
      throw new Error("Wrong email/password");
    }
  } catch (error) {
    console.log(error);
  }
});
server.use(router);

server.listen(3333, () => {
  console.log();

  console.log("JSON Server is running");
});
