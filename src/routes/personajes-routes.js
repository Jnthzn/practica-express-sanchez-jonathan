import { Router } from "express";

const router = Router();

import {
  obtenerPersonajes,
  obtenerPersonajePorId,
  crearPersonaje,
  actualizarPersonaje,
  eliminarPersonaje,
} from "../controllers/personajes-controllers.js"; // recordar el .js

router.get("/", obtenerPersonajes);
router.get("/:id", obtenerPersonajePorId);
router.post("/", crearPersonaje);
router.put("/:id", actualizarPersonaje);
router.delete("/:id", eliminarPersonaje);

export default router;
