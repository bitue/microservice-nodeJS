const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    // console.log(token, '==================>');
    const TOKEN = token.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        // console.log(11);
        //  console.log(process.env.JWT_SECRET);
        const decoded = jwt.verify(TOKEN, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded, '-----------------');
        next();
    } catch (error) {
        //  console.log(error.name, '-------------');
        res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = authMiddleware;
