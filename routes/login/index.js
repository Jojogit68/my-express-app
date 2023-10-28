const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.render("login")
})

router.post("/", (req, res) => {
	res.send(
		`Ton nom d'utilisateur est ${req.body.username} et ton mot de passe est ${req.body.password} !`
	)
})

module.exports = router
