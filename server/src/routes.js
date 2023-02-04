import { Router } from "express";
import { select_req } from './sql.js'

const router = Router();

router.get("/", async (_req, res) => {
  const requests = await select_req()
  
  return res.render("index",{requests});
});

router.get("*", (_req, res) => {
  return res.status(404).end();
});

export { router };
