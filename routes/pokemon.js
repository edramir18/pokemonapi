const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
	res.status(200).json({msg: 'OK'});
});

router.post('/', (req, res) => {
	const pokemon = req.body;
	res.status(200).json(pokemon);
});

router.get('/:_id', (req, res) => {
	const _id = req.param._id;
	const pokemon = {_id: _id};
	res.status(200).json(pokemon);
});

router.put('/:_id', (req, res) => {
	const _id = req.param._id;
	const pokemon = req.body;
	res.status(200).json({msg: 'OK'});
});

router.delete('/:_id', (req, res) => {
	const _id = req.param._id;
	res.status(200).json({msg: 'OK'});
});

module.exports = router;