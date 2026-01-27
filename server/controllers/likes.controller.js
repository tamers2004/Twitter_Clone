import { LikesModel } from "../models/likes.model.js";
import { CacheService } from "../services/cache.service.js";

export const getAllLikes = async (req, res) => {

    //   const likes = await LikesModel.getAllLikes();
    const likes = await CacheService.getFromCache("all_likes", LikesModel.getAllLikes)
  


    res.status(200).send({ success: "true", likes })
}


export * as LikesController from "../controllers/likes.controller.js";

