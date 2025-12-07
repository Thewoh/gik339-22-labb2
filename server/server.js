const express = require("express");
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () => console.log(`listening on http://localhost:${3000}`));

server.get("/users", (req, res) => {
  const sql = `SELECT * FROM users`;
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); // Skicka tillbaka som JSON
  });
});

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./gik339-labb2.db");

const sql = `SELECT * FROM USERS`;
db.all(sql, (err, rows) => {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
