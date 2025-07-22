import express from "express"
import cors from "cors"
import jwt from "jsonwebtoken"
import bodyParser from "body-parser"

const app = express()
app.use(express.json())
app.use(cors())
const user = {
    fullName: "Balaj Maqbool",
    username: "balajmaqbool",
    email: "balajmaqbool54@gmail.com",
    password: "123456", // 🔒 Hashed in real apps
    gender: "Male",
    phone: "+92 300 1234567",
    dateOfBirth: "2002-05-10",
    address: {
        street: "H#45, Main Road",
        city: "Khushab",
        district: "Khushab",
        province: "Punjab",
        postalCode: "41000",
        country: "Pakistan"
    },
    university: {
        name: "University of Sargodha",
        department: "Software Engineering",
        enrollmentNo: "SE2021-B123",
        year: "Final Year",
        campus: "Main Campus"
    },
    socialLinks: {
        github: "https://github.com/balajmaqbool",
        linkedin: "https://linkedin.com/in/balajmaqbool",
        portfolio: "https://balajmaqbool.dev"
    },
    createdAt: "2025-07-22T12:45:00Z",
    isActive: true,
    role: "student" // or 'admin', 'seller', 'customer'
}

app.post("/login", async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (username === user.username && email === user.email && password === user.password) {
            const token = jwt.sign(user, "thesecretkey", { expiresIn: "1h" })
            return res.json({ token })
        }
        else {
            return res.status(401).json({ message: "Wrong Credentials , User Not Found" })
        }

    } catch (error) {
        return res.json(error)
    }
})
app.listen(3000, () => {
    // console.log("server running at http//localhost:3000")
})

