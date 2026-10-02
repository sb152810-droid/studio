const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Роздаємо статичні файли з папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Пінговий маршрут для UptimeRobot, щоб сервер не засинав
app.get('/ping', (req, res) => {
  res.status(200).send('pong 🏓');
});

app.listen(PORT, () => {
  console.log(`Сервер успішно запущено на порту ${PORT}`);
});
