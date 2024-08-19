import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: '85.215.157.12',
    user: 'user',
    password: 'BigPosson.2211',
    database: 'social-media'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});