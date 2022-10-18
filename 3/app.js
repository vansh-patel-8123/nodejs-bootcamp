const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
    // {  // basic request & response

    //     // request
    //     console.log(req.url, req.method, req.headers);

    //     // response
    //     res.setHeader('Content-Type','text/html');
    //     res.write('<html>');
    //     res.write('<body>');
    //     res.write('<p>Hello world</p>');
    //     res.write('</body>');
    //     res.write('</html>');
    //     res.end();
    // }

    res.setHeader("Content-Type", "text/html");
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<body>");
        res.write("<p>node.js server</p>");
        res.write(
            '<form action="/message" method="POST"> <input type="text" name="message"><button type="submit">send</button> </form>'
        );
        res.write("</body>");
        res.write("</html>");
        res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (Data) => {
            console.log(Data);
            body.push(Data);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.end();
            });
        });
    }
    res.end();
});

server.listen(PORT);

