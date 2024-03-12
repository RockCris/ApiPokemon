const { Router } = require('express');

const pokemonRoutes = require('./pokemons');
const typeRoute = require('./types');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/pokemons", pokemonRoutes)
router.use("/types", typeRoute)


module.exports = router;
