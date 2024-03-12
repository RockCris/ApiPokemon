const express = require('express');
const axios = require('axios');
const { Pokemon, Types } = require('../db'); // Asegúrate de importar los modelos correctamente
const router = express.Router();

// GET | /pokemons
router.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50');
      const pokemons = response.data.results;
      res.json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error pokemons' });
    }
});

// GET | /pokemons/:idPokemon
router.get('/:idPokemon', async (req, res) => {
    const { idPokemon } = req.params;
  
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      const pokemonData = response.data;
  
      if (!pokemonData) {
        return res.status(404).json({ error: 'Pokémon no encontrado' });
      }
  
      const pokemonDetails = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        vida: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
        ataque: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat,
        defensa: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat,
        velocidad: pokemonData.stats.find(stat => stat.stat.name === 'speed')?.base_stat || null,
        altura: pokemonData.height,
        peso: pokemonData.weight,
        types: pokemonData.types.map(type => type.type.name),
      };
  
      res.json(pokemonDetails);
  
    } catch (error) {
      console.error('Error interno con Id:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// ...
router.get('/name/:pokemonName', async (req, res) => {
    const { pokemonName } = req.params;
  
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = response.data;
  
      if (!pokemonData) {
        return res.status(404).json({ error: 'Pokémon no encontrado' });
      }
  
      const pokemonDetails = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        vida: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
        ataque: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat,
        defensa: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat,
        velocidad: pokemonData.stats.find(stat => stat.stat.name === 'speed')?.base_stat || null,
        altura: pokemonData.height,
        peso: pokemonData.weight,
        types: pokemonData.types.map(type => type.type.name),
      };
  
      res.json(pokemonDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/', async (req, res) => {

});

module.exports = router;
