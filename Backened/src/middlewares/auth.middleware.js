import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log("Authorization Header:", authHeader); // Debugging line

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized. Login again."
        });
    }

    const token = authHeader.split(' ')[1]; // Extract token

    console.log("Extracted Token:", token); // Debugging line

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized. Login again."
        });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const token_decode = jwt.verify(token, secret);
        console.log("Token_decode",token_decode);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.error("JWT verification error:", error); // Detailed error logging
        res.status(401).json({
            success: false,
            message: "Invalid token."
        });
    }
};

export default authMiddleware; 