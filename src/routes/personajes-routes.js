import { Router } from "express";

const router = Router();

import {
  obtenerPersonajes,
  obtenerPersonajePorId,
} from "../controllers/personajes-controllers.js"; // recordar el .js

router.get("/", obtenerPersonajes);
router.get("/:id", obtenerPersonajePorId);

export default router;
