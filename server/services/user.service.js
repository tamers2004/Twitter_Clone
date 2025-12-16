import { TweetsModel } from "../models/tweet.model.js";
import { UsersModel } from "../models/user.model.js";
import { LikesModel } from "../models/likes.model.js";


export const likePost = async (userID, postID) => {

  // 0. validate data, (check if post exist, check if user exist, check if user is correct user, like is done once)
  const tweet = await TweetsModel.get(postID);
  const user = await UsersModel.get(userID);
  const likeEntity = await LikesModel.getByUserIdAndPostId(userID, postID);

  if (!tweet) {
    throw new Error("Tweet does not exist");
  } else if (!user) {
    throw new Error("User does not exist");
  } else if (likeEntity) {
    throw new Error("You already liked this post");
  }

  // 1. create like enitity in the DB
  await LikesModel.create({
    user_id: userID,
    tweet_id: postID
  })

  // 2. increment like count in tweet table
  await TweetsModel.incrementLikes(postID);
}


export * as UsersService from "../services/user.service.js";
