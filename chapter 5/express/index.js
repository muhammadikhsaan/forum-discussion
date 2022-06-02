import express from "express";
import router from "./route.js";
import morgan from "morgan";

const app = express();

app.set("view engine", "ejs");

// Application Middleware
app.use((req, res, next) => {
    const angka = req.query.angka;

    console.log('Time:', Date.now());

    if (angka != 10) {
        next();
        return;
    }

    res.status(400).send("Permintaan Salah");
});

// Built In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Middleware
app.use("/auth", router);

// Third Party Middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send("Hello World ini Post");
});

app.get("/withParam/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/err", (req, res) => {
    iniErr;
});

app.post("/testBody", (req, res) => {
    res.json(req.body);
    // axios / fetch
});

app.get("/html/:nama", (req, res) => {
    res.render("index", {
        nama: req.params.nama,
        umur: req.query.umur
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        status: "Not Found",
    })
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: "internal server error",
    })
});


app.listen(3300);