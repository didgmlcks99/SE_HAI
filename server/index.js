const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'hai.cafe24app.com',
    user: 'eunice25',
    password: 'qwas917161',
    database: 'eunice25',
});

db.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('running on port 3001');
});

// app.get('/api/get_dept_inst/:name', (req, res) => {
//     const name = req.params.name;
//     const sqlSelect = "SELECT * FROM institutes WHERE dept_name = ? ORDER BY dept_name";

//     console.log(name)

//     db.query(sqlSelect, name, (err, result) => {
//         res.send(result);
//     })
// });

// app.get('/api/get_depts', (req, res) => {
//     const sqlSelect = "SELECT dept_name FROM departments ORDER BY dept_name";

//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// });


// app.get('/api/get_insts', (req, res) => {
//     const sqlSelect = "SELECT * FROM institutes ORDER BY dept_name";

//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// });


// 확정 해당 페이지 위치에 따라 카테고리 분류하여 디비에 정보 입력
app.post('/api/insert_post', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const author = req.body.author;
    const category = req.body.category;
    
    const sqlInsert = "INSERT INTO posts (title, writer, body, date, category) VALUES (?, ?, ?, curdate(), ?);";
    db.query(sqlInsert, [title, author, body, category], (err, result) => {
        console.log(err);
    });
});

// 확정 카테고리별 노티스 넘겨줌
app.get('/api/get_posts/:category', (req, res) => {
    const category = req.params.category;

    const sqlSelect = "SELECT * FROM posts WHERE category like ?;";

    db.query(sqlSelect, category, (err, result) => {
        res.send(result);
        console.log(err)
    })
});

// 확정 하나의 노티스 아디로 넘겨줌
app.get('/api/get_one_post/:num', (req, res) => {
    const num = req.params.num;
    const sqlSelect = "SELECT * FROM posts where num = ?;";

    db.query(sqlSelect, num, (err, result) => {
        res.send(result);
    })
});

// 확정 해당 글 업데이트
app.post('/api/update_post', (req, res) => {
    const num = req.body.num;
    const title = req.body.title;
    const writer = req.body.writer;
    const body = req.body.body;
    
    const sqlUpdate = "UPDATE posts SET title = ?, writer = ?, body = ? WHERE num = ?;"
    
    db.query(sqlUpdate, [title, writer, body, num], (err, result) => {
        res.send(result)
    });
})

// 확정 노티스 아이디로 삭제
app.delete('/api/delete_post/:num', (req, res) => {
    const num = req.params.num;

    const sqlDelete = "DELETE FROM posts WHERE num = ?;";

    db.query(sqlDelete, num, (err, res) => {
        console.log(err);
    });
});