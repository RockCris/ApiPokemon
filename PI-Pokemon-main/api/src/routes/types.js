const express = require('express');
const { Type } = require('../db'); // Ajusta la ruta según tu estructura de archivos
const axios = require('axios');

const router = express.Router();

router.get('/types', async (req, res) => {
    try {
      // Lógica para obtener todos los tipos de pokemones desde la API
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const types = response.data.results;
      res.json(types);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;