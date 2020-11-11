const express = require('express');
const db = require('../db/index');

const router = express.Router();

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const { ID } = req.query;
			const results = await db.query(
				'SELECT map.id, map.location, map.date, map.plans FROM map WHERE map.user_id = $1',
				[ID]
			);
			res.status(200).json({
				status: 'success',
				results: results.rows.length,
				data: {
					markers: results.rows,
				},
			});
			console.log();
		} catch (err) {
			return next(err);
		}
	})
	.post(async (req, res, next) => {
		try {
			const { date, plans, location, zoom, user_id } = req.body;
			const results = await db.query(
				'INSERT INTO map (date, plans, location, zoom, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
				[date, plans, location, zoom, user_id]
			);
			res.status(201).json({
				status: 'success',
				data: {
					markers: results.rows[0],
				},
			});
		} catch (error) {
			return next(error);
		}
	})
	.patch()
	.delete();

module.exports = router;
