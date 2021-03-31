import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import NaversRepository from '../database/repositories/naversRepository'

class NaversController {
  async index(req: Request, res: Response) {
    const { userid } = req
    const userRepository = getCustomRepository(NaversRepository)
    const navers = await userRepository.find({ id_user: userid })

    return res.json({ navers: navers })
  }
  async store(req: Request, res: Response) {
    const { userid } = req

    const { name, birthdate, admission_date, job_role } = req.body

    const naverRepository = getCustomRepository(NaversRepository)

    const createNaver = naverRepository.create
      ({ name, birthdate, admission_date, job_role, id_user: userid })

    const userExists = await naverRepository.findOne({ name })

    if (userExists) {
      return res.status(400).json({ error: "Naver já existe!" })
    }
    try {
      await naverRepository.save(createNaver)

      return res.status(200).json({ Naver: createNaver.name })
    } catch (err) {
      return res.status(500).json({ error: "Não foi possível criar naver" })
    }


  }
}
export default new NaversController()