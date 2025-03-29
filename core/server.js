const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

let photos = [
    {
        id: 1,
        title: "Пример фото 1",
        description: "Это описание первого фото",
        imageUrl: "uploads/example1.jpg"
    },
    {
        id: 2,
        title: "Пример фото 2",
        description: "Это описание второго фото",
        imageUrl: "uploads/example2.jpg"
    }
];

app.get('/photos', (req, res) => {
    res.json(photos);
});

app.listen(PORT, () => {
console.log(`Сервер запущен на порту ${PORT}`);
});



