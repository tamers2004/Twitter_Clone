import { getDbConnector } from "../db.js";



export const create = async (data) => {
  const db = await getDbConnector();
  const [user] = await db.query("INSERT INTO tweets (user_id, text, likes) VALUES (?, ?, ?)",
    [data.user_id, data.text, 0 ]);
  return user[0];
}


export * as TweetsModel from "../models/tweet.model.js";



