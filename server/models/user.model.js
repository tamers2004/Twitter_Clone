import { getDbConnector } from "../db.js";


export const create = async (userInfo) => {
  const db = await getDbConnector();

  await db.query("INSERT INTO users (email, tag, password, first_name, last_name ) VALUES (?, ?, ?, ?, ?)",
    [userInfo.email, userInfo.tag, userInfo.password, userInfo.first_name, userInfo.last_name]);

}

export * as UsersModel from "../models/user.model.js";

