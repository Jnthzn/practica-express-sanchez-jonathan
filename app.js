import express from "express";

const app = express();
const PORT = 3003;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
