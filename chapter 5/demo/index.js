import express from 'express';
import views from './views/index.js';
import apis from './apis/index.js';

const port = 4040;
const app = express();

app.set("view engine", "ejs");

app.use("/", views);

app.use("/api/v1", apis);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});