const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.send(`
	<h1>Voici la page de tous les utilisateurs 👨‍👨‍👧‍👦</h1>
	<h2>${req.query.theme} ${req.query.sort}</h2>
	`)
})

router.post("/", (req, res) => {
	res.send("<h1>Voici la page des utilisateurs 👨‍👨‍👧‍👦 avec la requête POST</h1>")
})

router.get("/:username", (req, res) => {
	res.send(`<h1>Voici la page 📄 du profil de ${req.params.username} 👨‍👨‍👧‍👦</h1>`)
})

module.exports = router
