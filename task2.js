import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  try {
    throw new Error("Test server error");
  } catch (error) {
    const logMessage = `${new Date().toISOString()} - ${error.message}\n`;

    fs.appendFile("error.log", logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
    });
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
