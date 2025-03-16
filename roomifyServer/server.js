const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { data } = require('react-router');
const path = require('path');
const session = require('express-session');


const app = express();
const port = 3002;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}));

// 2. Настройка сессий
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
}));

// 3. Парсер JSON (важно, чтобы данные из формы корректно попали в req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Статические файлы и маршруты
app.use(express.static(path.join(__dirname, 'images')));



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
    const baseUrl = "http://localhost:3002"; // Базовый URL сервера

    // Сначала получаем популярные помещения
    db.query(`SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="1"
    `, (err, rooms) => {
        if (err) return res.status(500).json({ error: err.message });

        // Получаем все room_id популярных помещений
        const roomIds = rooms.map(room => room.id);

        // Получаем все изображения для этих помещений
        db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            // Группируем изображения по room_id и преобразуем пути в абсолютные
            const imagesByRoom = images.reduce((acc, image) => {
                acc[image.rooms_id] = acc[image.rooms_id] || [];
                acc[image.rooms_id].push({
                    ...image,
                    absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                });
                return acc;
            }, {});

            // Добавляем изображения к каждому помещению
            const roomsWithImages = rooms.map(room => ({
                ...room,
                images: imagesByRoom[room.id] || []
            }));

            res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
        });
    });
});



app.get('/bankets', (req, res) => {
    const baseUrl = "http://localhost:3002"; // Базовый URL сервера

    // Сначала получаем популярные помещения
    db.query(`
        SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="2"
    `, (err, rooms) => {
        if (err) return res.status(500).json({ error: err.message });

        // Получаем все room_id популярных помещений
        const roomIds = rooms.map(room => room.id);

        // Получаем все изображения для этих помещений
        db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            // Группируем изображения по room_id и преобразуем пути в абсолютные
            const imagesByRoom = images.reduce((acc, image) => {
                acc[image.rooms_id] = acc[image.rooms_id] || [];
                acc[image.rooms_id].push({
                    ...image,
                    absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                });
                return acc;
            }, {});

            // Добавляем изображения к каждому помещению
            const roomsWithImages = rooms.map(room => ({
                ...room,
                images: imagesByRoom[room.id] || []
            }));

            res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
        });
    });
});

app.get('/dance', (req, res) => {
    const baseUrl = "http://localhost:3002"; // Базовый URL сервера

    // Сначала получаем популярные помещения
    db.query(`
        SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="3"
    `, (err, rooms) => {
        if (err) return res.status(500).json({ error: err.message });

        // Получаем все room_id популярных помещений
        const roomIds = rooms.map(room => room.id);

        // Получаем все изображения для этих помещений
        db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            // Группируем изображения по room_id и преобразуем пути в абсолютные
            const imagesByRoom = images.reduce((acc, image) => {
                acc[image.rooms_id] = acc[image.rooms_id] || [];
                acc[image.rooms_id].push({
                    ...image,
                    absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                });
                return acc;
            }, {});

            // Добавляем изображения к каждому помещению
            const roomsWithImages = rooms.map(room => ({
                ...room,
                images: imagesByRoom[room.id] || []
            }));

            res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
        });
    });
});

app.get('/photo', (req, res) => {
    const baseUrl = "http://localhost:3002"; // Базовый URL сервера

    // Сначала получаем популярные помещения
    db.query(`
        SELECT *,thismetro.nameMetro AS metro FROM rooms LEFT JOIN metro as thismetro ON thismetro.idMetro = rooms.metro WHERE type="4"
    `, (err, rooms) => {
        if (err) return res.status(500).json({ error: err.message });

        // Получаем все room_id популярных помещений
        const roomIds = rooms.map(room => room.id);

        // Получаем все изображения для этих помещений
        db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            // Группируем изображения по room_id и преобразуем пути в абсолютные
            const imagesByRoom = images.reduce((acc, image) => {
                acc[image.rooms_id] = acc[image.rooms_id] || [];
                acc[image.rooms_id].push({
                    ...image,
                    absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                });
                return acc;
            }, {});

            // Добавляем изображения к каждому помещению
            const roomsWithImages = rooms.map(room => ({
                ...room,
                images: imagesByRoom[room.id] || []
            }));

            res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
        });
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


//объединен запрос на получение всех данных о room и + массив изображений
app.get('/rooms/:id', (req, res) => {
    const baseUrl = "http://localhost:3002";
    const roomId = req.params.id;

    // Запрос данных помещения
    const roomQuery = `
        SELECT 
            rooms.*,
            thismetro.nameMetro AS metro,
            thistype.name AS type,
            thistype.idTypes AS idTypes
        FROM 
            rooms
        INNER JOIN 
            metro AS thismetro ON thismetro.idMetro = rooms.metro
        INNER JOIN 
            types AS thistype ON thistype.idTypes = rooms.type
        WHERE 
            rooms.id = ?
    `;

    db.query(roomQuery, [roomId], (err, roomResults) => {
        if (err) {
            console.error(`Ошибка при получении данных помещения ID=${roomId}:`, err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        if (roomResults.length === 0) {
            return res.status(404).json({ error: 'Помещение не найдено' });
        }

        const roomData = roomResults[0];

        // Получаем все изображения для помещения
        db.query(`
            SELECT 
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id = ?
        `, [roomData.id], (err, images) => {
            if (err) {
                console.error(`Ошибка при получении изображений для помещения ID=${roomId}:`, err);
                return res.status(500).json({ error: 'Database error', details: err.message });
            }

            // Преобразуем пути к изображениям в абсолютные
            const imagesWithAbsolutePaths = images.map(image => ({
                ...image,
                absolutePath: `${baseUrl}${image.path.startsWith('/') ? image.path : '/' + image.path}`
            }));

            // Возвращаем данные с изображениями
            res.json({
                ...roomData,
                images: imagesWithAbsolutePaths
            });
        });
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
    const baseUrl = "http://localhost:3002"; // Базовый URL сервера

    // Сначала получаем популярные помещения
    db.query(`
        SELECT 
            rooms.id,
            rooms.name,
            rooms.priceWeekdays,
            rooms.square,
            rooms.capacity,
            rooms.description,
            rooms.isPopular,
            thismetro.nameMetro AS metro,
            thistype.name AS type
        FROM 
            rooms
        INNER JOIN 
            metro AS thismetro ON thismetro.idMetro = rooms.metro
        INNER JOIN 
            types AS thistype ON thistype.idTypes = rooms.type
        WHERE 
            rooms.isPopular = 1
    `, (err, rooms) => {
        if (err) return res.status(500).json({ error: err.message });

        // Получаем все room_id популярных помещений
        const roomIds = rooms.map(room => room.id);

        // Получаем все изображения для этих помещений
        db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            // Группируем изображения по room_id и преобразуем пути в абсолютные
            const imagesByRoom = images.reduce((acc, image) => {
                acc[image.rooms_id] = acc[image.rooms_id] || [];
                acc[image.rooms_id].push({
                    ...image,
                    absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                });
                return acc;
            }, {});

            // Добавляем изображения к каждому помещению
            const roomsWithImages = rooms.map(room => ({
                ...room,
                images: imagesByRoom[room.id] || []
            }));

            res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
        });
    });
});


//получение изоюражений
app.get('/images/:id', (req, res) => {
    const roomId = req.params.id; // Получаем ID помещения из URL

    // SQL-запрос с использованием параметризованного запроса для безопасности
    const query = `SELECT idImages, filename, path FROM images WHERE rooms_id = ?`;

    db.query(query, [roomId], (err, results) => {
        if (err) {
            console.error('Ошибка при получении изображений:', err);
            return res.status(500).json({ error: 'Ошибка базы данных', details: err.message });
        }

        // Возвращаем результат в формате JSON
        res.json(results);
    });
})




app.get('/get-search', (req, res) => {
    if (!currentSearch) {
        return res.status(404).json({ error: "Нет сохраненных данных" });
    }

    res.json({ success: true, data: currentSearch });
})


// полседний варик от чатгпт!!


app.post('/save-search', async (req, res) => {
    // Извлекаем данные из req.body
    const {
        typesList = [],
        metroList = [],
        optionsList = [],
        mincost = 0,
        maxcost = 100000,
        minsquare = 0,
        maxsquare = 100000,
        capacity = 0
    } = req.body;

    // Проверяем, что данные получены корректно
    console.log('Полученные данные:', {
        typesList,
        metroList,
        optionsList,
        mincost,
        maxcost,
        minsquare,
        maxsquare,
        capacity
    });

    // Сохраняем в сессию
    req.session.savedSearch = {
        typesList,
        metroList,
        optionsList,
        mincost,
        maxcost,
        minsquare,
        maxsquare,
        capacity
    };

    try {
        await new Promise((resolve, reject) => {
            req.session.save((err) => {
                if (err) return reject(err);
                // Проверяем, что данные сохранились
                console.log('Сохраненные данные в сессии:', req.session.savedSearch);
                resolve();
            });
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        res.status(500).json({ error: 'Ошибка' });
    }
});

app.get('/search', async (req, res) => {
    const baseUrl = "http://localhost:3002";
    try {
        console.log('Полная сессия:', req.session);
        console.log(req.session.savedSearch);
        let savedSearch = req.session.savedSearch;
        console.log('Запрос к /search. Данные из сессии:', savedSearch);
        if (!savedSearch) {
            return res.json(['1']); // Возвращаем пустой массив вместо ошибки
        }

        const {
            typesList,
            metroList,
            optionsList,
            mincost = 0,
            maxcost = 100000,
            minsquare = 0,
            maxsquare = 100000,
            capacity = 0
        } = savedSearch;

        // Проверяем корректность типов данных
        if (!Array.isArray(typesList) || !Array.isArray(metroList) || !Array.isArray(optionsList)) {
            return res.status(400).json({ error: 'Invalid data types in search parameters' });
        }

        const conditions = [];
        const params = [];

        // Фильтрация по типам помещений
        if (typesList.length > 0) {
            conditions.push('rooms.type IN (?)');
            params.push(typesList); // Пушим массив целиком
        }

        // Фильтрация по станциям метро
        if (metroList.length > 0) {
            conditions.push('rooms.metro IN (?)');
            params.push(metroList);
        }

        // Фильтрация по опциям
        if (optionsList.length > 0) {
            conditions.push(`
                    EXISTS (
                        SELECT 1
                        FROM rooms_options ro
                        WHERE ro.rooms_id = rooms.id
                        AND ro.options_id IN (?)
                        GROUP BY ro.rooms_id
                        HAVING COUNT(DISTINCT ro.options_id) = ?
                    )
                `);
            params.push(optionsList); // Пушим массив опций
            params.push(optionsList.length); // Количество опций
        }

        // Фильтрация по цене, площади и вместимости
        conditions.push('rooms.priceWeekdays BETWEEN ? AND ?');
        params.push(mincost, maxcost);

        conditions.push('rooms.square BETWEEN ? AND ?');
        params.push(minsquare, maxsquare);

        conditions.push('rooms.capacity >= ?');
        params.push(capacity);

        // Добавляем условие для опций
        params.push(optionsList.length || 0);

        // Формируем SQL-запрос
        const query = `
                SELECT 
                    rooms.*,
                    GROUP_CONCAT(DISTINCT options.name) AS options,
                    metro.nameMetro AS metro_name,
                    types.name AS type_name
                FROM rooms
                LEFT JOIN rooms_options ON rooms.id = rooms_options.rooms_id
                LEFT JOIN options ON rooms_options.options_id = options.idOptions
                LEFT JOIN metro ON rooms.metro = metro.idMetro
                LEFT JOIN types ON rooms.type = types.idTypes
                ${conditions.length ? 'WHERE ' + conditions.join(' AND ') : ''}
                GROUP BY rooms.id
                HAVING COUNT(DISTINCT options.idOptions) >= ?
            `;

        // Убедимся, что params — это массив
        if (!Array.isArray(params)) {
            return res.status(500).json({ error: 'Invalid params structure' });
        }

        // Выполняем запрос, передавая params напрямую
        db.query(query, params, (err, rooms) => {
            if (err) return res.status(500).json({ error: err.message });

            // Если результат пустой, возвращаем пустой массив
            if (!Array.isArray(rooms)) {
                return res.json([]);
            }

            const roomIds = rooms.map(room => room.id);

            // Получаем все изображения для этих помещений
            db.query(`
            SELECT 
                rooms_id,
                idImages,
                filename,
                path
            FROM 
                images
            WHERE 
                rooms_id IN (?)
        `, [roomIds], (err, images) => {
                if (err) return res.status(500).json({ error: err.message });

                // Группируем изображения по room_id и преобразуем пути в абсолютные
                const imagesByRoom = images.reduce((acc, image) => {
                    acc[image.rooms_id] = acc[image.rooms_id] || [];
                    acc[image.rooms_id].push({
                        ...image,
                        absolutePath: `${baseUrl}${image.path}` // Префиксирование пути
                    });
                    return acc;
                }, {});

                // Добавляем изображения к каждому помещению
                const roomsWithImages = rooms.map(room => ({
                    ...room,
                    images: imagesByRoom[room.id] || []
                }));

                res.json(roomsWithImages); // Возвращаем данные с абсолютными путями
            });
        });
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});