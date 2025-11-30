import { UsersModel } from "../models/user.model.js";


export const createUser = async (req, res) => {
  try {
    const { email,name,password } = req.body;

    if (!email || !password || !name) {
      throw new Error("Missing required fields");
    }

    await UsersModel.create({
      email,
      tag: "#dark",
      password,
      first_name: name,
      last_name: name
    })

    console.log("User created successfully");
    return res.status(200).send({ success: "true" })
  } catch (err) {
    console.info("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" })
  }
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing required fields");
    }
    
    const user = await UsersModel.getByEmail(email);

    if (!user) {
      return res.status(400).send({ success: "false", msg: "email doesnt exist" });
    } else if (user.password !== password) {
      return res.status(401).send({ success: "false", msg: "email or password incorrect" });
    }

    console.log("User logged in successfully");

    return res.status(200).send({ success: "true" });

  } catch (err) {
    console.error("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" });
  }
}


export * as UserController from "../controllers/user.contoller.js";

