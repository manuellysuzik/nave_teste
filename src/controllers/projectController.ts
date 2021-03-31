import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import NaversRepository from "../database/repositories/naversRepository";
import ProjectsRepository from "../database/repositories/projectsRepository";


class ProjectsController {
  async index(req: Request, res: Response) {
    const { userid } = req

    const projectRepository = getCustomRepository(ProjectsRepository)

    const projects = await projectRepository.find({ id_user: userid })

    const sortByName = projects.sort((obj1, obj2) => {
      return obj1.name < obj2.name ? -1 :
        (obj1.name > obj2.name ? 1 : 0);
    });

    return res.json({ projects: sortByName })

  }
  async show(req: Request, res: Response) {
    const { userid } = req
    const { id_projects } = req.params

    const projectRepository = getCustomRepository(ProjectsRepository)
    const naverRepository = getCustomRepository(NaversRepository)



    const project = await projectRepository.findOne({ id: id_projects })

    return res.json({ project: project })
  }
  async store(req: Request, res: Response) {
    const { userid } = req

    const { name, navers } = req.body

    const projectRepository = getCustomRepository(ProjectsRepository)
    const naverRepository = getCustomRepository(NaversRepository)

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