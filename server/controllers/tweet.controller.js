import { TweetsModel } from "../models/tweet.model.js";


export const createTweet = async (req, res) => {
  const { user_id, text, likes, created_at, deleted_at } = req.body;

  await TweetsModel.create({
    user_id,
    text,
    likes,
    created_at,
    deleted_at
  })

  res.status(200).send({ success: "true" })
}


export * as TweetController from "../controllers/tweet.controller.js";

