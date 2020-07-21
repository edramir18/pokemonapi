/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         name:
 *           type: string
 */
class Pokemon{
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}