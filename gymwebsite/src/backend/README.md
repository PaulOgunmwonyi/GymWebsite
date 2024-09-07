-- Create the table
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR(50),
    name VARCHAR(100),
    weight INTEGER,
    reps INTEGER,
    sets INTEGER
);

-- Insert data
INSERT INTO workout (group_name, name, weight, reps, sets) VALUES
('Pull', 'Unilateral Lat Pulley Row', 120, 9, 2),
('Push', 'Incline Dumbbell Press', 75, 7, 3),
('Pull', 'Bicep Bilateral Curls', 50, 8, 2),
('Push', 'Chest Fly', 200, 7, 2),
('Legs', 'Barbell Squat', 295, 7, 2),
('Legs', 'Seated Leg Curl', 230, 8, 2),
('Legs', 'Standing Calf Raises', 410, 9, 3),
('Legs', 'Machine Hip Thrusts', 220, 8, 2),
('Push', 'Reverse Barbell Curls', 60, 7, 2),
('Pull', 'Upper Back Machine Row', 180, 8, 2);

SELECT * FROM workout;

---
node gymwebsite/src/backend/server.js
