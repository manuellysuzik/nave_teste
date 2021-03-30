import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import UserRepository from '../database/repositories/userRepository'

class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body

    const userRepository = getCustomRepository(UserRepository)
    const createUser = userRepository.create({ email, password })

    const UserExists = await userRepository.findOne({ email })

    if (UserExists) {
      return res.status(400).json({ error: "Usuário Já existe" })
    }

    await userRepository.save(createUser)


    return res.status(200).json({
      message: "Usuário Criado com sucesso!",
      user: createUser.email,
      senha: password
    })
  }
}

export default new UserController()