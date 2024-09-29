const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
	console.log(req.query.name); // get query params
	res.send("User List");
});

router.post("/", (req, res) => {
	res.send("Create User");
});

router.get("/new", (req, res) => {
	res.send("User New Form");
});

// router.get("/:id", (req, res) => {
// 	res.send(`Get User With ID ${req.params.id}`);
// });

router
	.route("/:id")
	.get((req, res) => {
		console.log(req.user);
		res.send(`Get User With ID ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`Get User With ID ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Get User With ID ${req.params.id}`);
	});

const users = [{ name: "John" }, { name: "Alex" }];
router.param("id", (req, res, next, id) => {
	req.user = users[id];
	next();
});

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}

module.exports = router;
