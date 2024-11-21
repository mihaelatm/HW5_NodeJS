import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");

  if (req.method === "PUT") {
    res.statusCode = 200;
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE-запрос обработан");
  } else {
    res.statusCode = 405;
    res.end("Метод не поддерживается");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
