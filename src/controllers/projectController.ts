import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import NaversRepository from "../database/repositories/naversRepository";
import ProjectsRepository from "../database/repositories/projectsRepository";


class ProjectsController {
  async index(req: Request, res: Response) {
    const { userid } = req


  }
  async show(req: Request, res: Response) {

  }
  async store(req: Request, res: Response) {
    const { userid } = req

    const { name, navers } = req.body

    const projectRepository = getCustomRepository(ProjectsRepository)
    const naverRepository = getCustomRepository(NaversRepository)

    const naverExists = await naverRepository.find({ id_user: userid })

    console.log(naverExists)

    if (naverExists) {
      return res.status(404).json({ error: "Não é possível criar o projeto pois o Naver não existe" })
    }
    const createProject = projectRepository.create({ name, id_navers: navers, id_user: userid })

    try {
      await projectRepository.save(createProject)

      return res.status(200).json({ message: "Projeto Criado com sucesso", projeto: createProject })
    } catch (err) {
      return res.status(500).json({ error: "Não foi possível salvar o projeto" })
    }

  }
}

export default new ProjectsController();