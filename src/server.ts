import path from "path";
import express, {Request, Response} from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes/mainRoutes"
import mustache from "mustache-express";

const server = express();

dotenv.config();

server.use(express.urlencoded({extended: true}));
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname, "../", "public")));
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada");
});

server.listen(process.env.PORT);

