import jwt from "jsonwebtoken";
import User from "../Models/user.schema.js";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res) => {


    const token = req.header.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: "Token Missing" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default authMiddleware;