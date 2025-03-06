const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { data } = require('react-router');

const app = express();
const port = 3002;
let currentSearch = null;



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
    db.query('SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="1"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.get('/bankets', (req, res) => {
    db.query('SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="2"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/dance', (req, res) => {
    db.query('SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="3"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/photo', (req, res) => {
    db.query('SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="4"', (err, results) => {
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

app.get('/questions', (req, res) => {
    db.query('SELECT * FROM questions', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
})


app.get('/rooms/:id', (req, res) => {
    const roomId = req.params.id;
    const query = `SELECT *,rooms.name AS name, thismetro.nameMetro AS metro, thistype.name AS type
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


app.get('/popular', (req, res) => {
    db.query('SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE isPopular="1"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
})


// app.get('/search', async (req, res) => {
//     try {
//         if (!currentSearch || !currentSearch.data) {
//             return res.status(400).json({ error: 'No saved search data found' });
//         }

//         const { typesList, metroList, optionsList, mincost, maxcost, minsquare, maxsquare, capacity } = currentSearch.data;

//         const parsedTypesList = (typesList || '').split(',').filter(Boolean);
//         const parsedMetroList = (metroList || '').split(',').filter(Boolean);
//         const parsedOptionsList = (optionsList || '').split(',').filter(Boolean);

//         let conditions = [];
//         const params = [];

//         if (parsedTypesList.length > 0) {
//             conditions.push('rooms.type IN (?)');
//             params.push(parsedTypesList);
//         }

//         if (parsedMetroList.length > 0) {
//             conditions.push('rooms.metro IN (?)');
//             params.push(parsedMetroList);
//         }

//         if (parsedOptionsList.length > 0) {
//             conditions.push('EXISTS (SELECT 1 FROM rooms_options ro WHERE ro.rooms_id = rooms.id AND ro.options_id IN (?))');
//             params.push(parsedOptionsList);
//         }

//         const queryConditions = conditions.length > 0
//             ? `WHERE ${conditions.join(' AND ')}`
//             : '';

//         const query = `
//             SELECT 
//                 rooms.*,
//                 GROUP_CONCAT(DISTINCT options.name SEPARATOR ', ') AS option_names,
//                 metro.nameMetro AS metro,
//                 types.name AS type_name
//             FROM 
//                 rooms
//             LEFT JOIN 
//                 rooms_options ON rooms.id = rooms_options.rooms_id
//             LEFT JOIN 
//                 options ON rooms_options.options_id = options.idOptions
//             LEFT JOIN 
//                 metro ON rooms.metro = metro.idMetro
//             LEFT JOIN 
//                 types ON types.idTypes = rooms.type
//             ${queryConditions}
//             AND rooms.priceWeekdays BETWEEN ? AND ?
//             AND rooms.square BETWEEN ? AND ?
//             AND rooms.capacity >= ?
//             GROUP BY rooms.id;
//         `;

//         params.push(
//             parseFloat(mincost) || 0,
//             parseFloat(maxcost) || Infinity,
//             parseFloat(minsquare) || 0,
//             parseFloat(maxsquare) || Infinity,
//             parseInt(capacity) || 0
//         );

//         const [rows] = await db.execute(query, params);
//         res.json(rows);
//     } catch (error) {
//         console.error('Database error:', error.message);
//         res.status(500).json({ error: 'Internal server error', details: error.message });
//     }
// });

// app.post('/save-search', (req, res) => {
//     try {
//         const { typesList, metroList, optionsList, mincost, maxcost, minsquare, maxsquare, capacity } = req.body;

//         // Проверяем, что все параметры существуют
//         if (!typesList || !metroList || !optionsList) {
//             return res.status(400).json({ error: 'Invalid or missing search data' });
//         }

//         // Сохраняем данные
//         currentSearch = {
//             data: {
//                 typesList: (typesList || '').split(',').filter(Boolean),
//                 metroList: (metroList || '').split(',').filter(Boolean),
//                 optionsList: (optionsList || '').split(',').filter(Boolean),
//                 mincost: parseFloat(mincost) || 0,
//                 maxcost: parseFloat(maxcost) || Infinity,
//                 minsquare: parseFloat(minsquare) || 0,
//                 maxsquare: parseFloat(maxsquare) || Infinity,
//                 capacity: parseInt(capacity) || 0
//             }
//         };

//         console.log('Сохранены данные поиска:', currentSearch);
//         res.json({ success: true, message: 'Данные поиска сохранены' });
//     } catch (error) {
//         console.error('Ошибка при сохранении данных:', error);
//         res.status(500).json({ error: 'Internal server error', details: error.message });
//     }
// });
// app.get('/get-search', (req, res) => {
//     if (!currentSearch) {
//         return res.status(404).json({ error: "Нет сохраненных данных" });
//     }

//     res.json({ success: true, data: currentSearch });
// })



app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});