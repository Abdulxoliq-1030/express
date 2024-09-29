const express = require("express");
const userRouter = require("./routes/users");

const app = express();

app.use(express.static("public")); // this middleware read all types of files or folders on this public read static
app.use(express.json());
app.use(logger); // If you want this middleware working on the one request we can write after path for example app.get("/",logger, (req, res) => {

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	// res.status(500).send("Hi");
	// res.download("server.js");
	// res.json({ message: "Error" });
	res.render("index", { text: "World" });
});

app.use("/users", userRouter);

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

app.listen(3000);
