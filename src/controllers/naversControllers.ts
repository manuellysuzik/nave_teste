import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import NaversRepository from '../database/repositories/naversRepository'

class NaversController {
  async index(req: Request, res: Response) {
    const { userid } = req
    const userRepository = getCustomRepository(NaversRepository)
    const navers = await userRepository.find({ id_user: userid })

    const sortNaversDate = navers.sort((obj1, obj2) => {
      return obj1.admission_date < obj2.admission_date ? -1 :
        (obj1.admission_date > obj2.admission_date ? 1 : 0);
    });

    return res.json({ navers: sortNaversDate })
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
  async show(req: Request, res: Response) {
    const { id_naver } = req.params

    const naverRepository = getCustomRepository(NaversRepository)

    console.log(id_naver)

    const NaverExists = await naverRepository.findOne({ id: id_naver })

    if (!NaverExists) {
      return res.status(404).json({ error: "O Naver não existe" })
    }

    return res.json({ naver: NaverExists })
  }
}
export default new NaversController()