import express from "express";
import { getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userId", getUser)

router.get("/test", (req, res)=> {
    res.send('it works')
})

export default router;