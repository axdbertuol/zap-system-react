const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const isAuthorized = (email, password) => {
  const { users } = router.db.getState();
  return users.find((u) => u.email === email && u.password === password);
};
// server.use((req, res, next) => {
//   console.log(req.body);
//   if (isAuthorized(req.body.email, req.body.password)) {
//     next(); // continue to JSON Server router
//   } else {
//     res.sendStatus(401);
//   }
// });
server.post("/auth-user", (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = isAuthorized(email, password);
    if (userFound) {
      req.body = { user: userFound };
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
