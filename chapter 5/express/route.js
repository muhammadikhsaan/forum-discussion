import express from "express";

const router = express.Router();

router.use((req, res, next) => {
    const email = req.query.email;

    if (email != undefined) {
        next();
        return;
    }

    res.send("Memerlukan Email");
});

router.get("/login", (req, res) => {
    console.log("Ini halaman login");
    res.send("Ini halaman login");
});

export default router;