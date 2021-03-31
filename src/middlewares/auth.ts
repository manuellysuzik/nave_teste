import { Request, Response } from "express";
import jwt, { decode } from 'jsonwebtoken'
import authConfig from "../config/authConfig";
import { promisify } from 'util'

export default async function (req: Request, res: Response, next: any) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "Token is not provided" })
  }

  try {
    const [, token] = authHeader.split(" ")
    const validated = await jwt.verify(token, process.env.SECRET_TOKEN)
    req.userid = validated.id

    return next()

  } catch (err) {
    return res.status(401).json({ error: "invalid token" })
  }
}