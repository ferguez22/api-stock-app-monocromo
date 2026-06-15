const express = require('express');
const pool = require('../../config/db');
const asyncHandler = require('../../utils/asyncHandler');

const router = express.Router();

// GET /api/proveedores — lista simple para el select del form
router.get('/', asyncHandler(async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM proveedor ORDER BY nombre');
  res.json({ success: true, data: rows, error: null });
}));

module.exports = router;
