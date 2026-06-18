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

export const crearPersonaje = (req, res) => {
  const nuevoPersonaje = {
    id: personajes[personajes.length - 1].id + 1, // se le asigna un id
    ...req.body, // nombre e imagen
  };

  personajes.push(nuevoPersonaje); // agrega el personaje nuevo

  return res.status(201).json(nuevoPersonaje); // mensaje de pj creado
};

export const actualizarPersonaje = (req, res) => {
  const idPersonaje = Number(req.params.id);

  if (isNaN(idPersonaje)) {
    return res.status(400).json({
      error: "El ID debe ser un número válido",
    });
  }

  const personajeEncontrado = personajes.find(
    (personaje) => personaje.id === idPersonaje,
  );

  if (!personajeEncontrado) {
    return res.status(404).json({
      error: "Personaje no encontrado",
    });
  }

  personajeEncontrado.nombre = req.body.nombre || personajeEncontrado.nombre; // Si mandan un nombre nuevo → lo actualiza - Si no mandan nada → mantiene el anterior
  personajeEncontrado.imagen = req.body.imagen || personajeEncontrado.imagen;

  return res.json(personajeEncontrado); // personaje ya actualizado
};

export const eliminarPersonaje = (req, res) => {
  const idPersonaje = Number(req.params.id);

  if (isNaN(idPersonaje)) {
    return res.status(400).json({
      error: "El id debe ser un número válido",
    });
  }

  const indice = personajes.findIndex(
    (personaje) => personaje.id === idPersonaje,
  );

  if (indice === -1) {
    return res.status(404).json({
      error: "Personaje no encontrado",
    });
  }

  personajes.splice(indice, 1);

  return res.status(200).json({
    mensaje: "Personaje eliminado correctamente",
  });
};
