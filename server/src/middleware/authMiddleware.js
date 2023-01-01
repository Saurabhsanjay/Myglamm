const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];


  if (token == null) {
    return res.status(401).json({ message: 'No token provided' });
  }

  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

   
    req.user = user;
    next();
  });
};

module.exports = authMiddleware;
