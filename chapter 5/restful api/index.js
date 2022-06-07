import express from "express";
import posts from "./static/data-post.json";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

console.log(express.urlencoded({ extended: true }));

app.get("/api/v1/post", (req, res) => {
    const { id } = req.query;

    console.log("first");

    if (id) {
        const post = posts.data.find((d) => d.id === +id);

        return res.status(200).json({
            data: post
        });
    }

    const post = posts.data.filter((d) => d.isActive);

    return res.status(200).json(post);
});

app.get("/api/v1/post", (req, res) => {
    const {
        id
    } = req.query;

    if (id) {
        const post = posts.data.find((d) => d.id === +id);

        return res.status(200).json({
            data: post
        });
    }

    const post = posts.data.filter((d) => d.isActive);

    return res.status(200).json(post);
});

app.get("/api/v1/post/:id", (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;
    // const a = +id;

    const post = posts.data.find((d) => d.id === +id && d.isActive);

    return res.status(200).json({
        data: post
    });
});

app.get("/api/v2/post", (req, res) => {
    return res.status(200).json(posts.data);
});

app.post("/api/v1/post", (req, res) => {
    const { title, body } = req.body;

    const data = posts.data;
    const id = data[data.length - 1].id + 1;

    posts.data.push({
        id,
        title,
        body
    })

    return res.status(201).json({
        data: { title, body }
    });
});

app.put("/api/v1/post/:id", (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;

    const post = posts.data.find((d) => d.id === +id);
    post.title = title;
    post.body = body;

    posts.data = posts.data.map((d) => {
        if (d.id === +id) {
            return post;
        }

        return d;
    });

    return res.status(201).json({
        data: {
            id: +id,
            title,
            body
        }
    });
});

app.patch("/api/v1/post/:id", (req, res) => {
    const {
        id
    } = req.params;
    const {
        title,
        body
    } = req.body;

    const post = posts.data.find((d) => d.id === +id);
    post.title = title;
    post.body = body;

    posts.data = posts.data.map((d) => {
        if (d.id === +id) {
            return post;
        }

        return d;
    });

    return res.status(201).json({
        data: {
            id: +id,
            title,
            body
        }
    });
});

// Hard Delete
// app.delete("/api/v1/post/:id", (req, res) => {
//     const { id } = req.params;

//     posts.data = posts.data.filter((d) => d.id !== +id);

//     console.log(posts.data);

//     return res.status(200).json({
//         message: `Data dengan id ${id} berhasil dihapus`
//     });
// });

// Soft Delete
app.delete("/api/v1/post/:id", (req, res) => {
    const {
        id
    } = req.params;

    posts.data = posts.data.map((d, i) => {
        if (d.id === +id) {
            d.isActive = false;
        }

        return d;
    });

    console.log(posts.data);

    return res.status(200).json({
        message: `Data dengan id ${id} berhasil dihapus`
    });
});

app.listen(4000, () => {
    console.log("Server Running on port 4000");
});     