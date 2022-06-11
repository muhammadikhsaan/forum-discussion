import { Router, json } from "express";
import data from "./static/data.json";

const routes = Router();

routes.use(json());

routes.use((req, res, next) => {
    if (req.headers.authorization === "dakjwnbkdhasdnkq2u38912ekjqwbe23") {
        return next();
    }

    return res.status(401).json({
        message: "Belum Login"
    });
});

routes.get("/data", (req, res) => {
    const { page, search } = req.query;

    let pages = page;

    if (pages === undefined) {
        pages = 1;
    }

    const perPage = 4;

    const filter = data.data.filter((d) => d.isActive);

    const result = [];

    const firstIndex = (pages - 1) * perPage;

    let lastIndex = firstIndex + 4;

    if (firstIndex + 4 >= data.data.length) {
        lastIndex = data.data.length;
    }

    for (let index = firstIndex; index < lastIndex; index++) {
        result.push(filter[index]);
    }

    return res.status(200).json(result);
});

routes.get("/data/:id", (req, res) => {
    const { id } = req.params;
    const result = data.data.find((d) => d.id === +id);

    return res.status(200).json({
        result: result
    });
});

routes.post("/data", (req, res) => {
    const { title, description } = req.body;

    console.log({
        title,
        description
    });

    const items = data.data;
    const id = items[items.length - 1].id + 1;

    data.data.push({
        id: id,
        title: title,
        description: description,
        createdBy: "Anton",
        isActive: true
    });

    return res.status(200).json({
        message: "success"
    });
});


routes.put("/data/:id", (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (title === undefined) {
        return res.status(401).json({
            message: "error"
        });
    }

    if (description === undefined) {
        return res.status(401).json({
            message: "error"
        });
    }

    data.data = data.data.map((d) => {
        if (d.id === +id) {
            return {
                id: d.id,
                title: title,
                description: description,
                createdBy: d.createdBy,
                isActive: true
            }
        }

        return d;
    });

    return res.status(200).json({
        message: "success"
    });
});

routes.delete("/data/:id", (req, res) => {
    const { id } = req.params;

    data.data = data.data.map((d) => {
        if (d.id === +id) {
            return {
                ...d,
                isActive: false
            }
        }

        return d;
    });

    return res.status(200).json({
        message: "success"
    });
});

export default routes;