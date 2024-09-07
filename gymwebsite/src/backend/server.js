// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Route to get all workouts
app.get('/api/workouts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM workout');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error 1' });
  }
});

// Route to add a new workout
app.post('/api/workouts', async (req, res) => {
  const { group_name, name, weight, reps, sets } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO workout (group_name, name, weight, reps, sets) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [group_name, name, weight, reps, sets]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error 2' });
  }
});

// Route to get a specific workout by ID
app.get('/api/workouts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM workout WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error 3' });
  }
});

// Route to update a workout
app.put('/api/workouts/:id', async (req, res) => {
  const { id } = req.params;
  const { group_name, name, weight, reps, sets } = req.body;
  try {
    const result = await pool.query(
      'UPDATE workout SET group_name = $1, name = $2, weight = $3, reps = $4, sets = $5 WHERE id = $6 RETURNING *',
      [group_name, name, weight, reps, sets, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error 4' });
  }
});

// Route to delete a workout
app.delete('/api/workouts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM workout WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error 5' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
