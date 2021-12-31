import jwt from "jsonwebtoken"
import StatusCodes from "http-status-codes"

const authenticateUser = (req, res, next)=>{
    // check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(StatusCodes.UNAUTHORIZED).json({msg: "Authentication Invalid"})
    }

    const token = authHeader.split(" ")[1];

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { userId: payload.userId, username: payload.username };
      next();
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({ msg: error });
    }
}

export default authenticateUser;