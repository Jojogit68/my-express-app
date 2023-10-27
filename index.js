const express = require("express")
const users = require("./routes/users/index")
const posts = require("./routes/posts/index")

const app = express()

app.use("/users", users)
app.use("/posts", posts)

app.use((req, res, next) => {
	console.log(new Date().toUTCString())
	next()
})

app.get("/", [
	(req, res, next) => {
		console.log("Middleware 1")
		next()
	},
	(req, res, next) => {
		console.log("Middleware 2")
		next()
	},
	(req, res, next) => {
		console.log("Middleware 3")
		next()
	},
	(req, res) => {
		console.log("Middleware 4")
		res.send(`
			<h1>Express : Bienvenue ! 👌</h1>
			<h2>Vous êtes sur la page d'accueil</h2>
			<p>Traitement effectué par le middleware n°4</p>
		`)
	},
])

app.all("/any-route", (req, res) => {
	res.send(
		"<h1>Cette page 📄 peut être obtenue avec tous les types de requête HTTP</h1>"
	)
})

app.listen(3000)
