const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.send(`<h1>Voici la page de tous les articles</h1>`)
})

router.get("/most-popular", (req, res) => {
	res.send("<h1>Voici la page des articles les + populaires</h1>")
})

module.exports = router
