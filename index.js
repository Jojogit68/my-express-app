const express = require('express')
const users = require("./routes/users/index")
const posts = require("./routes/posts/index")

const app = express()

app.use("/users", users)
app.use("/posts", posts)

app.get("/", (req, res) => {
	res.send(`<h1>Express : Bienvenue ! 👌</h1>`)
})

app.all("/any-route", (req, res) => {
	res.send(
		"<h1>Cette page 📄 peut être obtenue avec tous les types de requête HTTP</h1>"
	)
})

app.listen(3000)