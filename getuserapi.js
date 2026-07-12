import express from 'express';
const app = express()
const users = [
    {
        name: "Kriti Rai",
        title: "Full stack developer"
    },
    {
        name: "Punit Rai",
        title: "Information Technology Manager"
    }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000, () => console.log("Server Running on port 3000"))