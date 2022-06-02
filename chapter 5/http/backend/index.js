import http from "http";

http.createServer(function(req, res){
    const url = req.url;

    if (url === "/login") {
        res.write(JSON.stringify({
            username: "aldi",
            umur: "12 Tahun"
        }, null, 2))
    } else {
        res.writeHead(404);
    }

    res.end();
}).listen(1234);