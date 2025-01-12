const cors = require("cors");
const { logOrigin } = require("../services/log.service");

const corsMiddleware = (req, res, next) => {
  const allowedOrigins = ["http://localhost:3000", "https://s0kqx3mz-3000.inc1.devtunnels.ms"],
    origin = req.headers.origin,
    isAllowedOrigin = allowedOrigins.includes(origin) || !origin,
    isAllowedPath = req.originalUrl.startsWith("/api"),
    check = isAllowedOrigin && isAllowedPath;
    logOrigin(origin)


  if (!check)
    res
      .status(403)
      .json({ message: "CORS policy does not allow this request" });
  else {
    cors({
      origin: origin,
      methods: ["GET", "POST"],
      credentials: true,
    })(req, res, next);
  }
};

module.exports = corsMiddleware;
