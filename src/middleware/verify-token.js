import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    jwt.verify(req.headers.token, "our_secret_key", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "invalid token",
            });
        }
        req.decoded = decoded;
        next();
    });
}