const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// 提供静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 处理根请求，返回 HTML 文件
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
