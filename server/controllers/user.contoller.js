import { UsersModel } from "../models/user.model.js";


export const createUser = async (req, res) => {
  try {
    const { email, tag, password, first_name, last_name } = req.body;

    if (!email || !tag || !password || !first_name || !last_name) {
      throw new Error("Missing required fields");
    }

    await UsersModel.create({
      email,
      tag,
      password,
      first_name,
      last_name
    })

    console.log("User created successfully");
    return res.status(200).send({ success: "true" })
  } catch (err) {
    console.info("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" })
  }
}


export * as UserController from "../controllers/user.contoller.js";

