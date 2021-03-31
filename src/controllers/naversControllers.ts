import { Request, Response } from "express";

class NaversController {
  async index(req: Request, res: Response) {
    const { id } = req


    return res.json({ ok: id })
  }
}
export default new NaversController()