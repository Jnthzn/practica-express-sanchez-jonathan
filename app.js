import express from "express";
import rutaPersonajes from "./src/routes/personajes-routes.js";

const app = express();
const PORT = 3003;

app.use(express.json());
app.use("/personajes", rutaPersonajes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
