import { Request, Response } from "express";

class NaversController {
  async index(req: Request, res: Response) {
    return res.json({ ok: "ok" })

    return
  }
}
export default new NaversController()