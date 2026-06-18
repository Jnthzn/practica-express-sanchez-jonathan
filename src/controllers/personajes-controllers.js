import { personajes } from "../data/personajes.js"; // traigo los datos desde personaje.js

export const obtenerPersonajes = (req, res) => {
  return res.json(personajes); // los devuelvo en formato JSON
};

export const obtenerPersonajePorId = (req, res) => {
  const idPersonaje = Number(req.params.id); // convierte en numero la id que viene

  if (isNaN(idPersonaje)) {
    // verifica si es un numero valido (que no sea un "hola")
    return res.status(400).json({
      error: "El ID debe ser un número válido", // devuelve error si no es valido
    });
  }

  const personajeEncontrado = personajes.find(
    // busca personaje con esta funcion
    (personaje) => personaje.id === idPersonaje, // busca coincidencia entre estas variables
  );

  if (!personajeEncontrado) {
    // si no ecuentra devuelve el siguiente error
    return res.status(404).json({
      error: "Personaje no encontrado",
    });
  }

  return res.json(personajeEncontrado); // devuelve en formato JSON el encontrado
};

export const crearPersonaje = (req, res) => {};

export const actualizarPersonaje = (req, res) => {};

export const eliminarPersonaje = (req, res) => {};
