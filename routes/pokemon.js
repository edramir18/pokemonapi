const express = require('express');
const router = express.Router();
/**
 * @swagger
 * /pokemon:
 *   get:
 *     tags:
 *     - Pokemon
 *     summary: "List all pokemon in database"
 *     produce:
 *     - "application/json"
 *     responses:
 *       "200":
 *         description: "Return all pokemon"
 */
router.get('/', (_, res) => {
	res.status(200).json({msg: 'OK'});
})

module.exports = router;