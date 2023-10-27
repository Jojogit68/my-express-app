const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.send(`<h1>Voici la page de tous les utilisateurs 👨‍👨‍👧‍👦</h1>`)
})

router.post("/", (req, res) => {
	res.send("<h1>Voici la page des utilisateurs 👨‍👨‍👧‍👦 avec la requête POST</h1>")
})

router.get("/jonathan", (req, res) => {
	res.send("<h1>Voici la page 📄 de mon profil utilisteur 👨‍👨‍👧‍👦</h1>")
})

module.exports = router
