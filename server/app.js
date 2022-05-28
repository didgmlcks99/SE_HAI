"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
const db = mysql_1.default.createConnection({
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
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('build'));
app.listen(3001, () => {
    console.log('running on port 3001');
});
app.get('/', function (req, res) {
    res.send(__dirname + '/build/index.html');
});
app.get('/api/get_depts', (req, res) => {
    const sqlSelect = "SELECT dept_name FROM departments WHERE num != 14 ORDER BY num";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
app.get('/api/get_insts', (req, res) => {
    const sqlSelect = "SELECT inst_id, name, x.dept_name, num FROM institutes as x, departments as y WHERE x.dept_name = y.dept_name and num != 14 ORDER BY num";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
app.get('/api/get_one_inst/:inst_id', (req, res) => {
    const inst_id = req.params.inst_id;
    const sqlSelect = "SELECT * FROM institutes where inst_id = ?;";
    db.query(sqlSelect, inst_id, (err, result) => {
        res.send(result);
    });
});
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
    const sqlSelect = "SELECT * FROM posts WHERE category like ? ORDER BY num DESC;";
    db.query(sqlSelect, category, (err, result) => {
        res.send(result);
        console.log(err);
    });
});
// 확정 하나의 노티스 아디로 넘겨줌
app.get('/api/get_one_post/:num', (req, res) => {
    const num = req.params.num;
    const sqlSelect = "SELECT * FROM posts where num = ?;";
    db.query(sqlSelect, num, (err, result) => {
        res.send(result);
    });
});
// 확정 해당 글 업데이트
app.post('/api/update_post', (req, res) => {
    const num = req.body.num;
    const title = req.body.title;
    const writer = req.body.writer;
    const body = req.body.body;
    const sqlUpdate = "UPDATE posts SET title = ?, writer = ?, body = ? WHERE num = ?;";
    db.query(sqlUpdate, [title, writer, body, num], (err, result) => {
        res.send(result);
    });
});
// 확정 노티스 아이디로 삭제
app.delete('/api/delete_post/:num', (req, res) => {
    const num = req.params.num;
    const sqlDelete = "DELETE FROM posts WHERE num = ?;";
    db.query(sqlDelete, num, (err, res) => {
        console.log(err);
    });
});
// client build -> build 폴더를 -> server/build -> 서버를 실행
// client 폴더로 이동
// npm ci
// npm run build
// client/build -> server/build 폴더로 이동
// server 폴더로 이동
// npm ci
// tsc
// node app.js
