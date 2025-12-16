import { getDbConnector } from "../db.js";


export const create = async (data) => {
  const db = await getDbConnector();
  const [like] = await db.query("INSERT INTO likes (user_id, tweet_id) VALUES (?, ?)",
    [data.user_id, data.tweet_id]);
  return like[0];
}


export const getByUserIdAndPostId = async (userID, postID) => {
  const db = await getDbConnector();
  const [like] = await db.query("SELECT * FROM likes WHERE user_id = ? AND tweet_id = ?", [userID, postID]);

  return like[0];
}


export * as LikesModel from "../models/likes.model.js";




