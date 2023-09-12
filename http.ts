// import http, {IncomingMessage, ServerResponse} from "http"

// const Port = 2000

// const server =http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
//     res.writeHead(200)
//     res.write("Server is up and listening")
//     res.end()
// })

// server.listen(Port, ()=>{
//     console.log("listening to port 2000");

// })

import http, { IncomingMessage, ServerResponse } from "http";
import { connect } from "http2";
import fs from "fs";
import path from "path";

const Port = 2000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200);
    // res.write("Server is up and listening")
    // res.end()

    let connect: string = "site/";
    switch (req.url) {
      case "/":
        connect += "home.html";
        res.statusCode = 200;
        break;
      case "/about":
        connect += "about.html";
        res.statusCode = 200;
        break;
      case "/contact":
        connect += "contact.html";
        res.statusCode = 200;
        break;
      default:
        connect += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path.join(__dirname, connect), (err, data) => {
      if (err) {
        console.log("an error occured", err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
);

server.listen(Port, () => {
  console.log("");

  console.log("listening to port 2000", Port);
});

// const Dataset = [
//   {
//     id: "1",
//     name: "daniel okwudill",
//     stack: "entry level",
//   },
//   {
//     id: "2",
//     name: "seau etang",
//     stack: "entry level",
//   },
//   {
//     id: "3",
//     name: "okoye francis",
//     stack: "full stack",
//   },
// ];

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
//       res.setHeader("content-Type", "application/json");
//       res.write(JSON.stringify(Dataset));
//       res.end();
//     }
//     res.end;
//   }
// );

// server.listen(Port, () => {
//   console.log("");

//   console.log("listening to port 2000", Port);
// });
