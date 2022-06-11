import axios from "axios";
import express, { Router } from "express";

const routes = Router();

routes.use(express.urlencoded({ extended: true }));

routes.use('/assets', express.static("./views/assets"));

routes.get("/", async (req, res) => {
    const { page } = req.query;

    const hasil = await axios({
        url: "http://localhost:4040/api/v1/data",
        method: "GET",
        params: { page },
        headers: {
            authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
        }
    });
    
    return res.render("index", {
        items: hasil.data
    });
});

routes.get("/add", async (req, res) => {
    return res.render("add", {
        onSubmit: () => {
            console.log("here");
        },
        test: "Hallo"
    });
});

routes.post("/add", async (req, res) => {
    const {title, description} = req.body;

    try {
        const data = await axios({
            url: "http://localhost:4040/api/v1/data",
            method: "POST",
            data: {
                title,
                description
            },
            headers: {
                authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
            }
        });

        return res.status(302).redirect("/");
    } catch (error) {
        return res.status(400).json({
            message: "Terjadi Kesalahan"
        });
    }
});

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    const hasil = await axios({
        url: `http://localhost:4040/api/v1/data/${id}`,
        method: "GET",
        headers: {
            authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
        }
    });

    return res.render("detail", {
        items: hasil.data
    });
});

routes.get("/:id/edit", async (req, res) => {
    const { id } = req.params;

    const hasil = await axios({
        url: `http://localhost:4040/api/v1/data/${id}`,
        method: "GET",
        headers: {
            authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
        }
    });

    return res.render("edit", {
        items: hasil.data
    });
});

routes.post("/:id/edit", async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const hasil = await axios({
            url: `http://localhost:4040/api/v1/data/${id}`,
            method: "PUT",
            data: {
                title: title,
                description: description
            },
            headers: {
                authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
            }
        });

        return res.status(302).redirect("/");
    } catch (error) {
        console.error(error);
        return res.status(302).redirect("/");
    }
});

routes.post("/:id", async (req, res) => {
    const { id } = req.params;

    const hasil = await axios({
        url: `http://localhost:4040/api/v1/data/${id}`,
        method: "DELETE",
        headers: {
            authorization: "dakjwnbkdhasdnkq2u38912ekjqwbe23"
        }
    });

    return res.status(302).redirect("/");
});

export default routes;