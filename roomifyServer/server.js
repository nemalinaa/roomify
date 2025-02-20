const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'roomify'
});

db.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных', err);
    } else {
        console.log('Подключение к базе данных успешно установлено');
    }
});

//Для получения инфы по помещениям

app.get('/lofts', (req, res) => {
    db.query('SELECT *,thismetro.name AS metro FROM rooms INNER JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="1" ', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/bankets', (req, res) => {
    db.query('SELECT *,thismetro.name AS metro FROM rooms INNER JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="2"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/dance', (req, res) => {
    db.query('SELECT *,thismetro.name AS metro FROM rooms INNER JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="3"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/photo', (req, res) => {
    db.query('SELECT *,thismetro.name AS metro FROM rooms INNER JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="4"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


//Для получения доп сведений

app.get('/types', (req, res) => {
    db.query('SELECT * FROM types', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/options', (req, res) => {
    db.query('SELECT * FROM options', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/metro', (req, res) => {
    db.query('SELECT * FROM metro', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.get('/reviews/:id', (req, res) => {
    const roomId = req.params.id;
    db.query('SELECT * FROM reviews WHERE rooms_id = ?', [roomId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.get('/rooms/:id', (req, res) => {
    const roomId = req.params.id;
    const query = `SELECT *,rooms.name AS name, thismetro.name AS metro, thistype.name AS type
    FROM rooms
    INNER JOIN metro as thismetro ON thismetro.idMetro = rooms.metro
    INNER JOIN types as thistype ON thistype.idTypes = rooms.type
    WHERE rooms.id = ?`;
    db.query(query, [roomId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.json(results);
    });
});





app.get('/lofts-with-options/:id', (req, res) => {
    const query = `
        SELECT 
            rooms.id AS room_id,
            rooms.name AS room_name,
            options.name AS option_name
        FROM 
            rooms
        LEFT JOIN 
            rooms_options ON rooms.id = rooms_options.rooms_id
        LEFT JOIN 
            options ON rooms_options.options_id = options.idOptions
        WHERE 
            rooms.id = ?;

    `;

    const roomId = req.params.id;

    db.query(query, [roomId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.json(results);
    });
});


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});