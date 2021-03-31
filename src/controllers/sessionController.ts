import 'dotenv'
import { Request, Response } from "express";
import UserRepository from '../database/repositories/userRepository'
import { getCustomRepository } from "typeorm";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


class SessionController {
  async create(req: Request, res: Response) {
    //VALIDAÇÃO DOS DADOS
    const { email, password } = req.body

    const userRepository = getCustomRepository(UserRepository)

    const verifyUser = await userRepository.findOne({ email })

    if (!verifyUser) {
      return res.status(404).json({ error: "Usuário não existe" })
    }

    const verifyPassword = bcrypt.compareSync(password, verifyUser.password)

    if (!verifyPassword) {
      return res.status(400).json({ error: "Senha incorreta" })
    }

    // CRIAÇÃO DO JWT
    const id_user = verifyUser.id

    const token = jwt.sign({ id: id_user }, process.env.SECRET_TOKEN, { expiresIn: '7d' })

    return res.json({ auth: true, token: token })

  }
  async exit(req: Request, res: Response) {
    res.json({ auth: null, token: null })
  }
}

export default new SessionController()