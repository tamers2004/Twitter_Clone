import mysql from "mysql2/promise";

let db = null;

export const getDbConnector = async () => {
  if (!db) {
    db = await mysql.createConnection({
      host: "localhost",       // or your Docker container name
      user: "myuser",
      password: "mypassword",
      database: "main",
    });
  }

  return db;
}
