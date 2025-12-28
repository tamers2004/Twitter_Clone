import { UsersModel } from "../models/user.model.js";
import { UsersService } from "../services/user.service.js"
import crypto from "crypto";
import bcrypt from "bcryptjs";



const sleep = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
}


export const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !password || !name) {
      throw new Error("Missing required fields");
    }

    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. create random token,
    const token = generateToken();

    await UsersModel.create({
      email,
      tag: "#dark",
      password: hashedPassword,
      first_name: name,
      last_name: name,
      token
    })

    console.log("User created successfully");
    return res.status(200).send({ success: "true", token, user: {
      email,
      name,
    } })
    
  } catch (err) {
    console.info("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" })
  }
}


export const login = async (req, res) => {
  try {
    console.log("Login request received");
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing required fields");
    }

    const user = await UsersModel.getByEmail(email);

    if (!user) {
      return res.status(400).send({ success: false, msg: "email doesnt exist" });
    }

    // Use bcrypt.compare to verify password against hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).send({ success: false, msg: "email or password incorrect" });
    }

    console.log("User logged in successfully");
    // 1. create random token,
    const token = generateToken();
    // 2. save token in database
    await UsersModel.update(user.id, {
      token
    })
    // 3. return token to user
    return res.status(200).send({ success: true, token });
  } catch (err) {
    console.error("There was an error in user.controller", err);
    return res.status(400).send({ success: false });
  }
}


export const likePost = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;
    await UsersService.likePost(user_id, post_id);
    return res.status(200).send({ success: "true" });
  } catch (err) {
    console.error("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" });
  }
}


export const getHomePageData = async (req, res) => {
  try {
    await sleep();
    const token = req.headers.authorization.split(" ")[1];

    const user = await UsersModel.getByToken(token);

    if (!user) {
      console.error("user not authorized");
      return res.status(401).send({success: "false"})
    } else {
      return res.status(200).send({success: "true", user})
    }


  } catch (err) {
    console.error("There was an error in user.controller", err);
    return res.status(400).send({ success: "false" });
  }
}


export * as UserController from "../controllers/user.contoller.js";
