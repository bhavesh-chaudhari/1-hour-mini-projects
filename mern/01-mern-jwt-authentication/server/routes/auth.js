import express from "express"
import { loginRoute, registerRoute } from "../controllers/auth.js"

const router = express.Router()

router.get("/", (req, res)=>{
    res.send("example route")
})
router.post("/login", loginRoute)
router.post("/register", registerRoute)

export default router;