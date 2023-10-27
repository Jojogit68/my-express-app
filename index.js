const express = require('express')

const app = express()

app.get("/", (req, res) => {
	res.send(`<h1>Express : Bienvenue ! 👌</h1>`)
})

app.get("/users", (req, res) => {
	res.send(`<h1>Voici la page des utilisateurs 👨‍👨‍👧‍👦</h1>`)
})

app.post("/users", (req, res) => {
	res.send("<h1>Voici la page des utilisateurs 👨‍👨‍👧‍👦 avec la requête POST</h1>")
})

app.all("/any-route", (req, res) => {
	res.send(
		"<h1>Cette page 📄 peut être obtenue avec tous les types de requête HTTP</h1>"
	)
})



app.listen(3000)