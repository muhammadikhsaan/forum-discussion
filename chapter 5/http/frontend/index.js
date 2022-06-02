import http from "http";
import fs from "fs";
import axios from "axios";

http.createServer(async function(req, res) {
    const url = req.url;

    if (url === "/auth/login") {
        try {
            const a = await axios({
                method: "GET",
                url: "http://localhost:1234"
            });

            // console.log(a.data);
        } catch (error) {
            
        }

        fs.readFile('./login.html', null, (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./index.html', null, (error, data) => {
            res.write(data);
            res.end();
        });
    }

}).listen(8080);