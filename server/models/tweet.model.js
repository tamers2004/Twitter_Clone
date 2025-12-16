import { getDbConnector } from "../db.js";


export const incrementLikes = async (id) => {
  const db = await getDbConnector();
  const [tweet] = await db.query("UPDATE tweets SET likes = likes + 1 WHERE id = ?",[id])
  return tweet[0];

}

export const create = async (data) => {
  const db = await getDbConnector();
  const [user] = await db.query("INSERT INTO tweets (user_id, text, likes) VALUES (?, ?, ?)",
    [data.user_id, data.text, 0]);
  return user[0];
}


export const get = async (id) => {
  const db = await getDbConnector();
  const [tweet] = await db.query("SELECT * FROM tweets WHERE id = ?", [id]);

  return tweet[0];
}


export * as TweetsModel from "../models/tweet.model.js";



